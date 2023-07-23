class TemplateMails {
  postulationForProyect({ projectData, postulantData }) {
    const { id, firstName, lastName, socialsMedia } = postulantData
    const {projectId , title} = projectData
    console.log("---A---")
    console.log(id)
    console.log("---A---")
    let socialmediaLinks = ''
    for(let media of socialsMedia){
      console.log(media)
      socialmediaLinks += `<p><a href=${media.url} target="_blank" >${media.name}</a></p>`
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
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    margin: 4px 2px;
                    cursor: pointer;
                  }
                  .button-accept {
                    background-color: #4caf50;
                    color: white;
                  }
                  .button-reject {
                    background-color: #f44336;
                    color: white;
                  }
                </style>
              </head>
              <body>
                <h1>¡Hola!</h1>
                <p>${firstName} ${lastName } ha postulado para tu proyecto:<b> ${title}</b> </p>
                <p>Aca abajo te dejamos sus redes sociales para que puedas conocer mejor a este postulante.</p>
                ${socialmediaLinks}

                <p>¿Deseas aceptar o rechazar la solicitud de esta paresona como colaborador</p>
                <a href="http://127.0.0.1:3000/api/projects/postulant/accept-reject?projectId=${projectId}&postulantId=${id}&desition=accepted" class="button button-accept" id="accept-button">Aceptar</a>
                <a href="http://127.0.0.1:3000/api/projects/postulant/accept-reject?projectId=${projectId}&postulantId=${id}&desition" class="button button-reject" id="reject-button">Rechazar</a>
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

  postulantAccepted(projectTitle, projectId) {
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
          <h1>Felicitaciones!</h1>
          <p>Has sido aceptado como colaborador para el proyecto ${projectTitle}! </p>
          <p>Esperamos tengas una gran experiencia en el desarrollo del mismo!</p>
          <p><a href="#ACAPORNER EL LINK DE ACCESO al Proyecto${projectId}">Clickea para ir al proyecto ${projectTitle}</a></p>
          
        </div>
      </body>
    </html>`
  }
}

module.exports = TemplateMails
