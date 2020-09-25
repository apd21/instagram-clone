import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBzO1brQgOxTDWk1i0hxOqwzc0sBCq7Cnw",
    authDomain: "instagram-clone-48af0.firebaseapp.com",
    databaseURL: "https://instagram-clone-48af0.firebaseio.com",
    projectId: "instagram-clone-48af0",
    storageBucket: "instagram-clone-48af0.appspot.com",
    messagingSenderId: "673431661935",
    appId: "1:673431661935:web:bc7eee9e1920f991da0c9a",
    measurementId: "G-5RVYWRPM01"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };