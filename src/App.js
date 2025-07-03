import React, { useState } from 'react';
import { BrowserRouter as  Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import BackgroundGuides from './pages/BackgroundGuides';
import Resources from './pages/Resources';
import Committees from './pages/Committees';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import MobileNavbar from './components/MobileNavbar';
const App = () => {
  const [openNav, setOpenNav] = useState(false);


  return (
    <Router>
      
            <MainApp openNav={openNav} setOpenNav={setOpenNav}/>
         
    </Router>
  )
}


const MainApp = ({openNav, setOpenNav}) =>{
  // const location = useLocation();
  // const LoginPage = location.pathname.startsWith('/login');
  // const RendererPage = location.pathname.match('/');


  return (
    <>
    <Cursor/>
    <Navbar openNav={openNav} setOpenNav={setOpenNav} />
    <MobileNavbar openNav={openNav} setOpenNav={setOpenNav} />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/backgroundguides' element={<BackgroundGuides />} />
      <Route path='/committees' element={<Committees />} />
      {/*<Route path='/resources' element={<Resources />} />*/}
      <Route path='/register' element={<Register />} />
      
      <Route path='/contact' element={<Contact />} />

     
  </Routes>
  <Footer/>

  <Toaster position="bottom-right" reverseOrder={false} />
    </>
    
  )
}
export default App;
