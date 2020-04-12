import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAfq6tM--xErcRb_Hrt0Vn0T6gH--zZDJU",
  authDomain: "crwn-db-553f4.firebaseapp.com",
  databaseURL: "https://crwn-db-553f4.firebaseio.com",
  projectId: "crwn-db-553f4",
  storageBucket: "crwn-db-553f4.appspot.com",
  messagingSenderId: "348272011728",
  appId: "1:348272011728:web:c7d60772a1d756122971d5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
