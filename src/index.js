import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/styles/itemCount.css"
import "./components/styles/cards.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBnLC5IcuqyFYF7Ibcr1HGaZwS0uhmgA0M",
  authDomain: "e-commerce-coderhouse-c45e1.firebaseapp.com",
  projectId: "e-commerce-coderhouse-c45e1",
  storageBucket: "e-commerce-coderhouse-c45e1.appspot.com",
  messagingSenderId: "648091669073",
  appId: "1:648091669073:web:018370cc4fd334e6161e70"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
