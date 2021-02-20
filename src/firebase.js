import firebase from 'firebase/app';
import 'firebase/storage'
let firebaseConfig = {
    apiKey: 'AIzaSyDLQ2GNcEZ3CYisYB0woWKvWlexbARBqkM',
    authDomain: 'myportfolio-196c3.firebaseapp.com',
    storageBucket: 'myportfolio-196c3.appspot.com'
};
firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the storage service, which is used to create references in your storage bucket
let storage = firebase.storage();
let storage_ref = storage.ref();


export default storage_ref;