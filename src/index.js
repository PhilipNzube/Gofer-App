import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.js';
import HomePage2 from './HomePage2.js';
import SignIn from './SignIn.js';
// import ForgotPassword from './ForgotPassword.js';
import './index.css';
// import swDev from './swDev.js';


function START() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/HomePage2" element={<HomePage2 />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

// swDev();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< START />);