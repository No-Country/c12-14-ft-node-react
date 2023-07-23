const {OAuth2Client} = require('google-auth-library');

class GoogleAuth {

  constructor() {
    this.clientId = process.env.GOOGLE_AUTH_CLIENT;
    this.client = new OAuth2Client();
  }

  async validateToken(token = "") {
    return await this.client.verifyIdToken({
      idToken: token,
      audience: this.clientId,
      // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    }).then( (data) => {
      // const userid = payload['sub'];
      // If request specified a G Suite domain:
      // const domain = payload['hd'];
      // console.log('s', data)

      return {valid: true, payload: data.getPayload()};

    }).catch((err) => {
      return {valid: false, msg: err.message}
    });

  }

}

module.exports = GoogleAuth;
