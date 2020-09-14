import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  // Put your own firebaseConfig here
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

function getDataFromFirebase() {
  return new Promise((resolve) => {
    database
      .ref("emojies")
      .once("value")
      .then((snapshot) => {
        const emojies = [];
        snapshot.forEach((childSnapshot) => {
          emojies.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        resolve(emojies);
      })
      .catch((error) => {
        alert("Error getDataFromFirebase()");
        console.log(error);
      });
  });
}

export { database, getDataFromFirebase };
