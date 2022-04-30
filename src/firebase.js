import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAesPbD4hXR1v4rBRjShrJMCE6rTL6vgDA",
  authDomain: "quora-clone-6fd8f.firebaseapp.com",
  projectId: "quora-clone-6fd8f",
  storageBucket: "quora-clone-6fd8f.appspot.com",
  messagingSenderId: "406845310009",
  appId: "1:406845310009:web:891843470fdb9fca1f39e8",
  measurementId: "G-0H1B7SYMN7"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();
export { auth, provider };
export default db;


