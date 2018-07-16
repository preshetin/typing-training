import { auth, db, firebase } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) => 
  auth.createUserWithEmailAndPassword(email, password).then(userCredential => 
    db.collection('users').doc(userCredential.user.uid).set({})
  );

const fbProvider = new firebase.auth.FacebookAuthProvider();
export const doSignInWithFacebook = () =>
  auth.signInWithPopup(fbProvider);

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const doSignInWithGoogle = () =>
  auth.signInWithPopup(googleProvider);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
  auth.signOut();
