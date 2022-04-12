import firebase from "firebase";

//initialize your database
var firebaseConfig = {
  apiKey: "AIzaSyA9huIy7aXKmn0lCclgGLHyGvQFZT5X0SA",
  authDomain: "project-60-39889.firebaseapp.com",
  databaseURL: "https://project-60-39889-default-rtdb.firebaseio.com",
  projectId: "project-60-39889",
  storageBucket: "project-60-39889.appspot.com",
  messagingSenderId: "522697513495",
  appId: "1:522697513495:web:c1195c627255a254501a52"
};

firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 

  