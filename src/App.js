import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './App.css';
import './assets/css/responsive.css';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import Home from './components/home/home';
import Layout from './common/layout';
import ItServices from './components/it-services/it-services';
import AboutUs from './components/about-us/about-us';
import StaffingServices from './components/staffing-services/staffing-services';
import ContactUs from './components/contact-us/contact-us';
import Career from './components/about-us/career';



export default function App() {
  return (
  <Router>
  <Layout>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/ItServices" element={<ItServices/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/staffing-services" element={<StaffingServices/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/career" element={<Career/>}/>
    </Routes>
  </Layout>
  </Router>


  );
}

