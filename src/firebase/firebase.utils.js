import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDH_uzkXX3l_km7SgO2cmv24v_-VYBvNKY",
  authDomain: "crown-clothing-db-7fc29.firebaseapp.com",
  projectId: "crown-clothing-db-7fc29",
  storageBucket: "crown-clothing-db-7fc29.appspot.com",
  messagingSenderId: "674228432651",
  appId: "1:674228432651:web:ca9dc17a511086befa3c0e",
  measurementId: "G-72WV6BEW3V",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (e) {
      console.log("Error creating user:", e);
    }
  } else {
    console.log("Snapshot doesnt exist!");
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
