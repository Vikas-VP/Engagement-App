import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDlGayI8bhtp5ixskOOwDzjKqo20RvmOZs",
  authDomain: "engagement-app-5c05f.firebaseapp.com",
  databaseURL: "engagement-app-5c05f",
  projectId: "engagement-app-5c05f.appspot.com",
  storageBucket: "573219770133",
  messagingSenderId: "1:573219770133:web:d0556a95a3643ffe2a231c",
  appId: "G-L7CVZXCDLD"
})

export const auth = app.auth()
export default app
