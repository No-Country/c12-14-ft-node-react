const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const accountTransport = require('../../../config/nodemailer/account.transport.json')
const {
  plantillaMailPostulation: mailPostulation,
} = require('../../helpers/mails/mailPostulation')

const TemplateMails = require('../../helpers/templateMails')
const templates = new TemplateMails()

class MailService {
  constructor() {
    const { clientId, clientSecret, redirectURI, refreshToken } =
      accountTransport.auth

    this.clientId = clientId
    this.clientSecret = clientSecret
    this.redirectURI = redirectURI
    this.refresh_token = refreshToken

    this.oauth2Client = new OAuth2(
      this.clientId,
      this.clientSecret,
      this.redirectURI
    )
    this.oauth2Client.setCredentials({ refresh_token: this.refresh_token })

    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'uva.team.no.country@gmail.com',
        clientId: this.clientId,
        clientSecret: this.clientSecret,
        refreshToken: this.refresh_token,
      },
    })
  }

  async sendMail({ to, subject, html }) {
    try {
      //const access_token = await this.oauth2Client.getAccessToken() //ver pq no hace falta usarlo

      const mailOptions = {
        from: 'UVA <uva.team.no.country@gmail.com>',
        to: [...to],
        subject: subject,
        html: html,
      }

      return await this.transporter.sendMail(mailOptions)
    } catch (e) {
      console.log(e)
    }
  }

  async sendWelcome({ to, subject = '¡Bienvenido a UVA! ' }) {
    try {
      //const access_token = await this.oauth2Client.getAccessToken() //ver pq no hace falta usarlo

      const mailOptions = {
        from: 'UVA <uva.team.no.country@gmail.com>',
        to: to,
        subject: subject,
        html: templates.welcome(),
      }

      return await this.transporter.sendMail(mailOptions)
    } catch (e) {
      console.log(e)
    }
  }

  async sendPostulationToProjectOwner({
    to,
    subject = '¡Hay un postulante para tu proyecto! ',
    proyectId,
    postulantId,
  }) {
    try {
      //const access_token = await this.oauth2Client.getAccessToken() //ver pq no hace falta usarlo

      const mailOptions = {
        from: 'UVA <uva.team.no.country@gmail.com>',
        to: to,
        subject: subject,
        html: templates.postulationForProyect({ proyectId, postulantId }),
      }

      return await this.transporter.sendMail(mailOptions)
    } catch (e) {
      console.log(e)
    }
  }
}

const mailService = new MailService()

mailService.sendWelcome({ to: ['castellanofacundo@gmail.com'] })

mailService.sendPostulationToProjectOwner({to:["castellanofacundo@gmail.com"],postulantId:"AAAAAAAAaA",postulantId:"BBBBBBBBBBB"})