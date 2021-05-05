import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBWxi14jg3E3afofs3hfppPeqSjVmjcQ1M",
    authDomain: "crwn-db-75905.firebaseapp.com",
    projectId: "crwn-db-75905",
    storageBucket: "crwn-db-75905.appspot.com",
    messagingSenderId: "809282277471",
    appId: "1:809282277471:web:e8b36b69a357116cfd8bea",
    measurementId: "G-ZJBPG37T6V"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;