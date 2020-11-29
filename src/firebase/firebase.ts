import firebase from "firebase/app";
import "firebase/storage";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage();

export { storage, firebase };
