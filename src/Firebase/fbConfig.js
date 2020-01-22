import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDTv07rwaKcwa1t-ZaPa7CacTrM0Q45nTY",
    authDomain: "onur-social.firebaseapp.com",
    databaseURL: "https://onur-social.firebaseio.com",
    projectId: "onur-social",
    storageBucket: "onur-social.appspot.com",
    messagingSenderId: "764334487571",
    appId: "1:764334487571:web:0e080cc26fa4d8a6f527e6"
};

firebase.initializeApp(firebaseConfig);


export default firebase;