const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2

const accountTransport = require('../../config/nodemailer/account.transport.json')
// class MailerService {
//   #CLIENT_ID
//   #CLIENT_SECRET
//   #REDIRECT_URI
//   #REFRESH_TOKEN
//   #oauth2Client

//   constructor() {
//     this.#CLIENT_ID = accountTransport.auth.clientId
//     this.#CLIENT_SECRET = accountTransport.auth.clientSecret
//     this.#REDIRECT_URI = accountTransport.auth.redirectURI
//     this.#REFRESH_TOKEN = accountTransport.auth.refreshToken
//     this.#oauth2Client = new OAuth2(this.#CLIENT_ID, this.#CLIENT_SECRET , this.#REDIRECT_URI)
//   }

//   async sendMail({ to, subject, html }) {
//     try {
//       const access_token = await this.#oauth2Client.getAccessToken()
//       const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           type: 'OAuth2',
//           user: 'uva.team.no.country@gmail.com',
//           clientId: CLIENT_ID,
//           clientSecret: CLIENT_SECRET,
//           refreshToken: REFRES_TOKEN,
//           accessToken: access_token,
//         },
//       })
  
//       const mailOptions = {
//         from: 'UVA <uva.team.no.country@gmail.com>',
//         to: [...to],
//         subject: subject,
//         html: html,
//       }
  
//       return await transporter.sendMail(mailOptions)
//     } catch (e) {
//       console.log(e)
//     }
//   }
// }

// module.exports = MailerService




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
  to: ['castellanofacundo@gmail.com'],
  subject: 'muy importante 99',
  html: `<b> Hola desde UVA TEAM</b> </br> </hr>
        Espero tengas un buen dia,
        saludos cordiales.`,
}).then((result) => {
  console.log(result)
})


