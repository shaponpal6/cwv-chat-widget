import app from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";
import "@firebase/remote-config";

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

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }

    this.auth = app.auth();
    this.db = app.firestore();
    this.remoteConfig = app.remoteConfig();
    this.firestore = app.firestore;
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.updateUserListMap = this.updateUserListMap.bind(this);
  }

  // *** Auth API ***

  getAuth = () => this.auth;
  getCurrentUser = () => this.auth.currentUser;
  getUserID = () => this.getCurrentUser().uid;
  // getServerTimestamp = () => this.firestore.FieldValue.serverTimestamp();
  getDisplayName = () => this.getCurrentUser().displayName;
  getPhotoURL = () => this.getCurrentUser().photoURL;

  // Add Visitors
  updateVisitorsListMap = (collectionId, uid, data) => {
    const chatUsersList = this.db.collection("visitors").doc(collectionId);
    return chatUsersList.set(
      {
        visitors: { [uid]: data },
      },
      { merge: true }
    );
  };

  // Get Action Listener
  getAction = (action) => this.db.collection("actions").doc(action);

  // get users Map
  getMessageDocs = () => {
    if (!this.getCurrentUser()) return null;
    return this.db.doc(`messages/${this.getUserID()}`);
  };
  
  
  getCollection = (ref) => this.db.collection(ref);
  getDoc = (ref) => this.db.doc(ref);
  setData = (collection, uid, data) =>
    this.db.collection(collection).doc(uid).set(data);
  addData = (collection, uid, field, data) =>
    this.db.collection(collection).doc(uid).collection(field).add(data);

  addMessage = (uid, data) =>
    this.db
      .collection("clients")
      .doc(uid)
      .doc("messages")
      .update("array", data);
  updateMessages = (uid, data) => {
    const clientRef = this.db.collection("clients").doc(uid);
    // data.time = this.firestore.Timestamp.now();
    return clientRef.update({
      messages: this.firestore.FieldValue.arrayUnion(data),
    });
  };
  setMessage = (data) => {
    if (!this.getCurrentUser()) return null;
    const clientRef = this.db.collection("messages").doc(this.getUserID());
    // data.time = this.firestore.Timestamp.now();

    return clientRef.set(
      {
        messages: this.firestore.FieldValue.arrayUnion(data),
      },
      { merge: true }
    );
  };
  // get users Map
  getClientData = () => {
    if (!this.getCurrentUser()) return null;
    return this.db.doc(`clients/${this.getUserID()}`);
  };

  // Update Map
  updateUserListMap = (uid, data) => {
    const chatUsersList = this.db.collection("lists").doc("chatUsersList");
    data.seen = this.firestore.Timestamp.now();
    return chatUsersList.set(
      {
        users: { [uid]: data },
      },
      { merge: true }
    );
  };

  // get users Map
  getListData = (type = "chatUsersList") => {
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
      console.log("error>>>> ", error);
    });
  };

  doSignInAnonymouslyWithData = (data) => {
    this.auth.signInAnonymously().catch(function (error) {
      console.log("error>>>> ", error);
    });
  };

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
