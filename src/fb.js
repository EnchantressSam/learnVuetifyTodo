import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAkJy8tDP4xcGvtHv3S21mkxxSeSBngW3M",
    authDomain: "todo-ench.firebaseapp.com",
    databaseURL: "https://todo-ench.firebaseio.com",
    projectId: "todo-ench",
    storageBucket: "todo-ench.appspot.com",
    messagingSenderId: "686176550906",
    appId: "1:686176550906:web:05d1743e623a61c6932e43",
    measurementId: "G-GSJFY3E9Q6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });
  

  export default db;