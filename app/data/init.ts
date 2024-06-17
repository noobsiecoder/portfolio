// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  Firestore,
  OrderByDirection,
  addDoc,
  Timestamp,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

interface MessageDocType {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  timestamp?: Timestamp;
}

export class Database {
  app: FirebaseApp;
  db: Firestore;

  constructor() {
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
  }

  async getOrderedData(
    collectionName: string,
    fieldName: string,
    orderDirection: OrderByDirection
  ) {
    "use server";
    const col = collection(this.db, collectionName);
    const orderedCol = query(col, orderBy(fieldName, orderDirection));
    const orderedSnapshot = await getDocs(orderedCol);
    const orderedList = orderedSnapshot.docs.map((doc) => doc.data());

    return orderedList;
  }

  async setMessageDocData(collectionName: string, data: MessageDocType) {
    "use server";
    data.timestamp = Timestamp.fromDate(new Date());
    try {
      await addDoc(collection(this.db, collectionName), data);
    } catch (err) {
      console.error(err);
    }
  }
}
