import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'; 
import Home from './pages/Home';
import Header from "./components/Header";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Beauty from './pages/Beauty';
import Fashion from "./pages/Fashion";
import Lifestyle from "./pages/Lifestyle";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
   <div className='App'>
    <Router>
      <Header/>
    <Navbar/>
      <Routes>
        <Route path="/" element={< Home/>}></Route>
        <Route path="/beauty" element={<Beauty/>}></Route>
        <Route path="/fashion" element={<Fashion/>}></Route>
        <Route path="/lifestyle" element={<Lifestyle/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
    </Routes>
    <Footer/>
  </Router>  
   </div>
  );
}

export default App;
