import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDCQTPvuYRX-5WDHU6-JymM4XuIpEO8UTM",
    authDomain: "facebook-clone-ani.firebaseapp.com",
    databaseURL: "https://facebook-clone-ani.firebaseio.com",
    projectId: "facebook-clone-ani",
    storageBucket: "facebook-clone-ani.appspot.com",
    messagingSenderId: "1066642581601",
    appId: "1:1066642581601:web:f15ef0182e838ed658e220"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }

export default db;