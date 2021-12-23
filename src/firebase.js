import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAv6jtHzHH-Y6h_whptMFFa2E9SRwyzx40",
  authDomain: "tinder-vat.firebaseapp.com",
  projectId: "tinder-vat",
  storageBucket: "tinder-vat.appspot.com",
  messagingSenderId: "301254233637",
  appId: "1:301254233637:web:8c3dd52e5764838d8139cc"
};

initializeApp(firebaseConfig);

const firestore = getFirestore();

export {firestore};
