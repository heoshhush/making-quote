import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/database'

    const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId:process.env.REACT_APP_FIREBASE_APP_ID
      };
      // Initialize Firebase
     const firebaseApp = firebase.initializeApp(firebaseConfig);
     export default firebaseApp;

export const firebaseAuth = firebaseApp.auth()
export const firebaseDatabase = firebaseApp.database();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const GithubProvider = new firebase.auth.GithubAuthProvider();
