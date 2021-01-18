import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD-DmwUzGlN_usLwahi0BXc1JRwJRH37yg",
    authDomain: "crwn-db-8f345.firebaseapp.com",
    databaseURL: "https://crwn-db-8f345.firebaseio.com",
    projectId: "crwn-db-8f345",
    storageBucket: "crwn-db-8f345.appspot.com",
    messagingSenderId: "539428362750",
    appId: "1:539428362750:web:42500f39ff05904f2548af",
    measurementId: "G-QZ01ZTSJZ8"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log("error creating user: ", e)
        }
    }


    return userRef;
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// * const facebookProvider = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
// * export const signInWithFaceBook = () => auth.signInWithPopup(facebookProvider);

export default firebase;  