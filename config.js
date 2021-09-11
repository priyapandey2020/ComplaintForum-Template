import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBMqaRCtrKbwrBHrPH8lh3Ew9s4yeHXHBE",
  authDomain: "complaintforum-86957.firebaseapp.com",
  projectId: "complaintforum-86957",
  storageBucket: "complaintforum-86957.appspot.com",
  messagingSenderId: "487196378984",
  appId: "1:487196378984:web:5a42c3fc8b5611879b38dd"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

