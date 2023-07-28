const firebase = require("firebase-admin");
const {firebaseConfig} = require("../../config/auth/firebase/config");


class FirebaseAuth {

  constructor() {

    if ( !firebase.apps.length )
      this.firebase = firebase.initializeApp(firebaseConfig)
    else
      this.firebase = firebase.apps[0]
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
