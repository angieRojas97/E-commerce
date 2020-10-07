import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDZTAf_zbE3pwDZKs4Z8yHL-A9pSEby8fQ",
    authDomain: "jr-proyect-coder.firebaseapp.com",
    databaseURL: "https://jr-proyect-coder.firebaseio.com",
    projectId: "jr-proyect-coder",
    storageBucket: "jr-proyect-coder.appspot.com",
    messagingSenderId: "363053766999",
    appId: "1:363053766999:web:505c8ec7b8e9ffe2d60612"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}