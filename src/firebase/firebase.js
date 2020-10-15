import app from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBQ1olf124Vp4ylrrc3eZCvfQUoc2oNBBM",
  authDomain: "live-support-bot.firebaseapp.com",
  databaseURL: "https://live-support-bot.firebaseio.com",
  projectId: "live-support-bot",
  storageBucket: "live-support-bot.appspot.com",
  messagingSenderId: "1074224122035",
  appId: "1:1074224122035:web:0040c4ea47b4d5d710c8c6",
};

// var firebaseConfig = {
//   apiKey: "AIzaSyC2vlff4QkXketlQHD-5O36mJ8Tb8dMG3o",
//   authDomain: "cwvchat.firebaseapp.com",
//   databaseURL: "https://cwvchat.firebaseio.com",
//   projectId: "cwvchat",
//   storageBucket: "cwvchat.appspot.com",
//   messagingSenderId: "943890705259",
//   appId: "1:943890705259:web:12d74221ba223a15b5ba2e",
//   measurementId: "G-YWM4XD6EYY"
// };

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }

    this.auth = app.auth();
    this.db = app.firestore();
    this.firestore = app.firestore;
    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  // *** Auth API ***

  getAuth = () => this.auth;
  getCurrentUser = () => this.auth.currentUser;
  getServerTimestamp = () => this.firestore.FieldValue.serverTimestamp();
  getUserID = () => this.getCurrentUser().uid;
  getDisplayName = () => this.getCurrentUser().displayName;
  getPhotoURL = () => this.getCurrentUser().photoURL;

  getCollection = (ref) => this.db.collection(ref);
  getDoc = (ref) => this.db.doc(ref);
  setData = (collection, uid, data) => this.db.collection(collection).doc(uid).set(data);
  addData = (collection, uid, field, data) => this.db.collection(collection).doc(uid).collection(field).add(data);

  addMessage = (uid, data) => this.db.collection('clients').doc(uid).doc('messages').update('array', data);
  updateMessages = (uid, data) => {
    const clientRef = this.db.collection('clients').doc(uid);
    // data.time = this.firestore.Timestamp.now();
    return clientRef.update({
      messages: this.firestore.FieldValue.arrayUnion(data)
    });
  };
  setMessage = (data) => {
    if (!this.getAuth()) return null;
    const clientRef = this.db.collection('clients').doc(this.getUserID());
    // data.time = this.firestore.Timestamp.now();

    return clientRef.set({
      messages: this.firestore.FieldValue.arrayUnion(data)
    }, { merge: true });
  };
  // get users Map
  getClientData = () => {
    if (!this.getAuth()) return null;
    return this.db.doc(`clients/${this.getUserID()}`);
  };

  // Update Map
  updateUserListMap = (uid, data) => {
    const chatUsersList = this.db.collection('lists').doc('chatUsersList');
    data.seen = this.firestore.Timestamp.now();
    return chatUsersList.set({
      "users": { [uid]: data }
    }, { merge: true });
  };

  // get users Map
  getListData = (type = 'chatUsersList') => {
    return this.db.doc(`lists/${type}`);
  };





  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInAnonymously = () => {
    // this.doSignInWithGoogle();

    // this.auth.signInWithEmailAndPassword('shapon@gmail.com', 'password1234').catch(function (error) {
    //   console.log('object', object)
    // });
    this.auth.signInAnonymously().catch(function (error) {
      console.log('error>>>> ', error)
    });
  }

  doSignInWithGoogle = () => {
    var provider = this.googleProvider;
    this.auth.useDeviceLanguage();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    provider.setCustomParameters({
      login_hint: "user@example.com",
    });
    this.auth
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        console.log("token", token);
        // The signed-in user info.
        var user = result.user;
        console.log("user", user);
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log("errorCode", errorCode);
      });
    // this.auth.signInWithEmailAndPassword(email, password);
  };

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = (uid) => this.db.collection(`users/${uid}`);

  users = () => this.db.collection("users");
  messages = () => this.db.collection("messages");
  knowledges = () => this.db.collection("knowledges");
}

export default Firebase;
