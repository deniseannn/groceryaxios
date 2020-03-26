import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyBojsUhV8gwqx-EZvkeASNn-uN9q1mGEZU",
    authDomain: "grocery-tutorial-2b4da.firebaseapp.com",
    databaseURL: "https://grocery-tutorial-2b4da.firebaseio.com",
    projectId: "grocery-tutorial-2b4da",
    storageBucket: "grocery-tutorial-2b4da.appspot.com",
    messagingSenderId: "44558097719",
    appId: "1:44558097719:web:62b07c86e6dfad58f0ceb2",
    measurementId: "G-QRE33WEFL9"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;