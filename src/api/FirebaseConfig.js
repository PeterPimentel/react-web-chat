import firebase from "firebase/app";
import "firebase/auth";

const config = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID
};

let googleAuthProvider;
let facebookAuthProvider;
let githubAuthProvider;
let twitterAuthProvider;

let auth;

if (process.env.REACT_APP_REQUIRE_AUTH === "true") {
	firebase.initializeApp(config);
	auth = firebase.auth();

	googleAuthProvider = new firebase.auth.GoogleAuthProvider();
	facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
	githubAuthProvider = new firebase.auth.GithubAuthProvider();
	twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
}

export {
	auth,
	googleAuthProvider,
	githubAuthProvider,
	facebookAuthProvider,
	twitterAuthProvider
};
