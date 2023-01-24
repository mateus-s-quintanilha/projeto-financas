import firebase from "firebase";
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAA_w9iOCBM2NO9QlhWTRS4aoAunCDKy9A",
    authDomain: "projeto-curso-react-nati-a9ce0.firebaseapp.com",
    projectId: "projeto-curso-react-nati-a9ce0",
    storageBucket: "projeto-curso-react-nati-a9ce0.appspot.com",
    messagingSenderId: "637262780375",
    appId: "1:637262780375:web:10af5743cda25abce3dd92",
    measurementId: "G-H76LBV1EX3"
  };
  
if(!firebase.apps.length) {
 // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    const app = firebase.initializeApp(firebaseConfig)
}

export default firebase;