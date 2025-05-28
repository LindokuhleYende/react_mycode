import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//firebase dependancies
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCXofMvD5gUIogh8ByXL9lON_qF02fbxWo",
  authDomain: "react-app-90dfd.firebaseapp.com",
  projectId: "react-app-90dfd",
  storageBucket: "react-app-90dfd.firebasestorage.app",
  messagingSenderId: "674822846562",
  appId: "1:674822846562:web:7662cbe21134c36770f93b",
  measurementId: "G-NLC517SR69"
};

firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
