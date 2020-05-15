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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
