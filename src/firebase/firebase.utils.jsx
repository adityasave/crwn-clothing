import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCwqSpFvTw-7ckGUIjbPFwvMP5w7jdXTbw",
  authDomain: "crwn-db-70e0d.firebaseapp.com",
  databaseURL: "https://crwn-db-70e0d.firebaseio.com",
  projectId: "crwn-db-70e0d",
  storageBucket: "crwn-db-70e0d.appspot.com",
  messagingSenderId: "699189410663",
  appId: "1:699189410663:web:db20aa44fafdeca8b04dc2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
