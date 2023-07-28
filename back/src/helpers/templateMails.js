class TemplateMails {
  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }

  postulationForProyect({ projectData, postulantData }) {
    const { id, firstName, lastName, socialsMedia, userName } = postulantData
    const { projectId, title } = projectData
    let socialmediaLinks = ''
    for (let media of socialsMedia) {
      socialmediaLinks += `<p><a href=${media.url} target="_blank" >${media.name}</a></p>`
    }
    let name
    if (firstName || lastName) {
      name =
        this.capitalizeFirstLetter(firstName) +
        ' ' +
        this.capitalizeFirstLetter(lastName)
    } else {
      name = this.capitalizeFirstLetter(userName)
    }
    return `
            <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8" />
                <title>
                  Plantilla de correo electrónico con botones de aceptar/rechazar
                </title>
                <style>
                  .button {
                    background-color: #4caf50;
                    border: none;
                    padding: 10px 25px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 17px;
                    margin: 4px 2px;
                    margin-left:15px;
                    cursor: pointer;
                    font-weight: 600;
                    border-radius:15px;
                    
                  }
                  .button:active{
                    transform: scale(0.9);
                  }
                  .button-accept {
                    background-color: #4caf50;
                    
                  }
                  .button-reject {
                    background-color: tomato;
                    
                  }
                </style>
              </head>
              <body>
                <h1>¡Hola!</h1>
                <p>${name} ha postulado para tu proyecto:<b> ${title}</b> </p>
                <p>Aca abajo te dejamos sus redes sociales para que puedas conocer mejor a este postulante.</p>
                ${socialmediaLinks}

                <p>¿Deseas aceptar o rechazar la solicitud de esta paresona como colaborador</p>
                <a href="https://dev-collab.onrender.com/api/projects/postulant/accept-reject?projectId=${projectId}&postulantId=${id}&desition=accepted" class="button button-accept" id="accept-button"  style="color: white">Aceptar</a>
                <a href="https://dev-collab.onrender.com/api/projects/postulant/accept-reject?projectId=${projectId}&postulantId=${id}&desition" class="button button-reject" id="reject-button" style="color: white">Rechazar</a>
              </body>
            </html>
`
  }

  welcome() {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Bienvenida a UVA</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #F1F1F1;
          }
          .container {
            width: 80%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #FFFFFF;
            border-radius: 10px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          h1 {
            margin-top: 0;
            color: #333333;
          }
          p {
            color: #666666;
          }
          a {
            color: #FFFFFF;
            background-color: #0099CC;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Bienvenido/a a UVA</h1>
          <p>Gracias por registrarte en nuestra plataforma. Te damos la bienvenida y esperamos que encuentres el equipo que estas buscando!.</p>
          <a href="#">Ir a UVA</a>
        </div>
      </body>
    </html>`
  }

  postulantAccepted({ projectData, postulantData }) {
    const { lastname, firstname, username } = postulantData
    console.log({ lastname, firstname, username })
    let name
    if (firstname || lastname) {
      name =
        this.capitalizeFirstLetter(firstname) +
        ' ' +
        this.capitalizeFirstLetter(lastname)
    } else {
      name = this.capitalizeFirstLetter(username)
    }

    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Bienvenida a UVA</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #F1F1F1;
          }
          .container {
            width: 80%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #FFFFFF;
            border-radius: 10px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          h1 {
            margin-top: 0;
            color: #333333;
          }
          p {
            color: #666666;
          }
          a {
            color: #FFFFFF;
            background-color: #0099CC;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>¡Felicitaciones ${name} !</h1>
          <p>Has sido aceptado como colaborador para el proyecto ${projectData.title}! </p>
          <p>Esperamos tengas una gran experiencia en el desarrollo del mismo!</p>
          <p><a href="https://uva-to1s.onrender.com/project/${projectData.id}">IR AL PROYECTO</a></p>
          
        </div>
      </body>
    </html>`
  }

  postulantRejected({ projectData, postulantData }) {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Bienvenida a UVA</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #F1F1F1;
          }
          .container {
            width: 80%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #FFFFFF;
            border-radius: 10px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          h1 {
            margin-top: 0;
            color: #333333;
          }
          p {
            color: #666666;
          }
          a {
            color: #FFFFFF;
            background-color: #0099CC;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Estimado/a ${postulantData.firstname} </h1>
          <p>Lamentamos informarte que no has sido aceptado como colaborador del proyecto  ${projectData.title}! </p>
          <p>Esperamos que no te desanimes</p>
          <p>Queremos invitarte a que pruebas aplicar a otros proyectos!</p>
          <p><a href="#aca poner las pagina principal de proyectos."> Ver otros proyectos</a></p>
          
        </div>
      </body>
    </html>`
  }
}

module.exports = TemplateMails
