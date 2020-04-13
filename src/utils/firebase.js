import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD_oBpVZHDuE3a81SmEiGAiEc5fNjefADM",
  authDomain: "e-luminous.firebaseapp.com",
  databaseURL: "https://e-luminous.firebaseio.com",
  projectId: "e-luminous",
  storageBucket: "e-luminous.appspot.com",
  messagingSenderId: "627607867725",
  appId: "1:627607867725:web:2a56c4f59fe1003ce26704",
  measurementId: "G-8GZFY1MJXJ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
