import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCitJjHBYUX2kqtmjJ1DZWHwVhY0Rez8CY",
  authDomain: "job-fit-7ba4c.firebaseapp.com",
  projectId: "job-fit-7ba4c",
  storageBucket: "job-fit-7ba4c.appspot.com",
  messagingSenderId: "271959409198",
  appId: "1:271959409198:web:39ca590ed0372ba58755bf"
};

const app = initializeApp(firebaseConfig);
export default app;