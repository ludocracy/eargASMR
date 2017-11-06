import firebase from 'firebase';

// Provided by the Firebase console
const config = {
  apiKey: "AIzaSyAoPbG_qLMyy8qn7Siqp4gbjjH2FSUjPcM",
  authDomain: "eargasmr-e1460.firebaseapp.com",
  databaseURL: "https://eargasmr-e1460.firebaseio.com",
  projectId: "eargasmr-e1460",
  storageBucket: "eargasmr-e1460.appspot.com",
  messagingSenderId: "507241458037"
};

// Firebase instance
firebase.initializeApp(config);

// Firebase doesn't return data as an array but as a parent object
//  containing child objects. This utility function will extract
//  the child objects into an array and place the key as 'id'
const firebaseListToArray = (firebaseObjectList) => {
  if (!firebaseObjectList) return [];

  return Object.keys(firebaseObjectList)
    .map(k => {
      const obj = {
        id: k
      };
      for (let key in firebaseObjectList[k]) {
        if (firebaseObjectList[k].hasOwnProperty(key)) {
          obj[key] = firebaseObjectList[k][key];
        }
      }
      return obj;
    });
}

const database = firebase.database();
const auth = firebase.auth();

export { database, auth };
export { firebaseListToArray };
