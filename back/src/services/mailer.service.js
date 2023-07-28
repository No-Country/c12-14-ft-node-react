const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const accountTransport = require('../../config/nodemailer/account.transport.json')

const TemplateMails = require('../helpers/templateMails')
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

  async sendPostulationToProjectOwner({ to, projectData, postulantData }) {
    try {
      const access_token = await this.oauth2Client.getAccessToken() //ver pq no hace falta usarlo

      const mailOptions = {
        from: 'UVA <uva.team.no.country@gmail.com>',
        to: to,
        subject: `¡Hey! Alguien ha postulado para tu proyecto: ${projectData.title}!`,
        html: templates.postulationForProyect({ projectData, postulantData }),
      }

      return await this.transporter.sendMail(mailOptions)
    } catch (e) {
      console.log(e)
    }
  }

  async sendAcceptedConfirmation({ projectData, postulantData }) {
    try {
      //const access_token = await this.oauth2Client.getAccessToken() //ver pq no hace falta usarlo

      const mailOptions = {
        from: 'UVA <uva.team.no.country@gmail.com>',
        to: postulantData.email,
        subject: `¡Felicitaciones! Has sido aceptado para colaborar en el proyecto: ${projectData.title}!`,
        html: templates.postulantAccepted({ projectData, postulantData }),
      }

      return await this.transporter.sendMail(mailOptions)
    } catch (e) {
      console.log(e)
    }
  }

  async sendRejectedConfirmation({ projectData, postulantData }) {
    try {
      //const access_token = await this.oauth2Client.getAccessToken() //ver pq no hace falta usarlo

      const mailOptions = {
        from: 'UVA <uva.team.no.country@gmail.com>',
        to: postulantData.email,
        subject: `Lamentamos informarte que tu solicitud para colaborar en el proyecto: ${projectData.title} ha sido rechazada.`,
        html: templates.postulantRejected({ projectData, postulantData }),
      }

      return await this.transporter.sendMail(mailOptions)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = MailService
