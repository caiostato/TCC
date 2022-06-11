import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// const {
//     REACT_APP_API_KEY,
//     REACT_APP_AUTH_DOMAIN,
//     REACT_APP_DATABASE_URL,
//     REACT_APP_PROJECT_ID,
//     REACT_APP_STORAGE_BUCKET,
//     REACT_APP_MESSAGING_SENDER_ID,
//     REACT_APP_APP_ID,
//     REACT_APP_MEASURMENT_ID
// } = process.env

// const firebaseConfig = {
//     apiKey: REACT_APP_API_KEY,
//     authDomain: REACT_APP_AUTH_DOMAIN,
//     databaseURL: REACT_APP_DATABASE_URL,
//     projectId: REACT_APP_PROJECT_ID,
//     storageBucket: REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
//     appId: REACT_APP_APP_ID,
//     measurementId: REACT_APP_MEASURMENT_ID
// };

// Initialize Firebase

// const app =initializeApp(firebaseConfig)


const firebaseConfig = {
    apiKey: "AIzaSyAWCJV7cXrCTqtArPwNLanM74WB9X2yYHc",
    authDomain: "rising-mercury-327713.firebaseapp.com",
    databaseURL: "https://rising-mercury-327713-default-rtdb.firebaseio.com",
    projectId: "rising-mercury-327713",
    storageBucket: "rising-mercury-327713.appspot.com",
    messagingSenderId: "324946142133",
    appId: "1:324946142133:web:471ae36050bd496a8faffc",
    measurementId: "G-X15JLT3MQ7"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

export default database