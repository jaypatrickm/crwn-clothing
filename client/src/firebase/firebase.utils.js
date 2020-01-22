import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Firebase is our database

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  //query inside firestore to see if it exists
  //documentRef we perform CRUD operations
  //.set(), .get(), .update(), .delete()
  //collectionRef .add()

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log(userRef);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      //console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
//always trigger google popup when this google auth provider is used
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export default firebase;
