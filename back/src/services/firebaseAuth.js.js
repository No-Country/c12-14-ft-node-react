const firebase = require("firebase-admin");
const {firebaseConfig} = require("../../config/config");


class FirebaseAuth {

  constructor() {
    this.firebase = firebase.initializeApp(firebaseConfig)

  }

  async validateToken(token = "") {

    return await this.firebase
      .auth().verifyIdToken(token).then((data) => {
        return {valid: true, payload: data};

      }).catch((err) => {
        return {valid: false, msg: err.message}
      })
  }

}

module.exports = FirebaseAuth;
