import React from 'react';
import { BrowserRouter as  Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Navbar from './components/Navbar';
const App = () => {

  return (
    <Router>
      
            <MainApp/>
         
    </Router>
  )
}


const MainApp = () =>{
  // const location = useLocation();
  // const LoginPage = location.pathname.startsWith('/login');
  // const RendererPage = location.pathname.match('/');


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
     
  </Routes>
  <Toaster position="bottom-right" reverseOrder={false} />
    </>
    
  )
}
export default App;
