const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2

const accountTransport = require('../../config/nodemailer/account.transport.json')
const CLIENT_ID = accountTransport.auth.clientId
const CLIENT_SECRET = accountTransport.auth.clientSecret
const REDIRECT_URI = accountTransport.auth.redirectURI
const REFRESH_TOKEN = accountTransport.auth.refreshToken

const oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

async function sendMail({ to, subject, html }) {
  try {
    const access_token = await oauth2Client.getAccessToken()
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'uva.team.no.country@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: access_token,
      },
    })

    const mailOptions = {
      from: 'UVA <uva.team.no.country@gmail.com>',
      to: [...to],
      subject: subject,
      html: html,
    }

    return await transporter.sendMail(mailOptions)
  } catch (e) {
    console.log(e)
  }
}


sendMail({
  to: ['castellanofacundo@hotmail.com'],
  subject: 'Correo de prueba',
  html: `<b> Hola desde UVA TEAM</b> </br> </hr>
        Espero tengas un buen dia\n
        saludos cordiales.
        el equipo de UVA TEAM`,
}).then((result) => {
  console.log(result)
})

module.exports = { sendMail }
