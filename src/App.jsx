
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "font-awesome/css/font-awesome.min.css";
import Home from './component/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css"
import AboutUs from './component/about/AboutUs';
import OurTeam from './component/ourteam/OurTeam';
import WhatWe from './component/what-we-do/WhatWe';
import Contact from './pages/contact/Contact';
import Service from './component/services/Service';
import Login from './pages/login/Login';
import Blog from './component/blog/Blog';
import BlogDetail from './component/blog/BlogDetail';
import Faq from './component/faq/Faq';
import Signup from './pages/signup/Signup';

function App() {


  return (
    <>
    <BrowserRouter basename="/ca-project/">
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about-us' element={<AboutUs />} />
    <Route path='/team' element={<OurTeam />} />
    <Route path='/what-we-do' element={<WhatWe />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/services' element={<Service />} />
    <Route path='/blog' element={<Blog />} />
    <Route path='/blog-detail' element={<BlogDetail />} />
    <Route path='/faq' element={<Faq />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />


    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
