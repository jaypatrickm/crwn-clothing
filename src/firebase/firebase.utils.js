import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//It is okay to expose this apikey. it is a public apikey
const config = {
  apiKey: 'AIzaSyBCW-BEbFy0Z83otasr0orCjKf2WkwtxB8',
  authDomain: 'crwndb-92120.firebaseapp.com',
  databaseURL: 'https://crwndb-92120.firebaseio.com',
  projectId: 'crwndb-92120',
  storageBucket: 'crwndb-92120.appspot.com',
  messagingSenderId: '536268030743',
  appId: '1:536268030743:web:5cd1e4fe1ddc0c35efed52',
  measurementId: 'G-321107LLXV'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//always trigger google popup when this google auth provider is used
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
