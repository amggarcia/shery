import firebase from "firebase";

export const fireBaseConfig = {
  //TODO : Moove this to env
  apiKey: "AIzaSyBpdu-DAsrGdIknwvZ5qnT5g23CP0QFVdg",
  authDomain: "shery-2ea9c.firebaseapp.com",
  projectId: "shery-2ea9c",
  storageBucket: "shery-2ea9c.appspot.com",
  messagingSenderId: "730117504842",
  appId: "1:730117504842:web:10e3f0f51e904c0a6b8bb3",
};

function initFirebase() {
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(fireBaseConfig);
    // firebase.analytics();
  }
  return firebase;
}

export const db = initFirebase().firestore();
export const auth = initFirebase().auth();
