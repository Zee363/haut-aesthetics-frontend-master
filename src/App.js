import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'; 
import Home from './pages/Home';
import Header from "./components/Header";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Beauty from './pages/Beauty';
import BeautyDetail from './pages/BeautyDetail';
import Fashion from "./pages/Fashion";
import FashionDetail from './pages/FashionDetail';
import Lifestyle from "./pages/Lifestyle";
import LifestyleDetail from "./pages/LifestyleDetail";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
   <div className='App'>
    <Router>
      <Header/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/home" element={< Home/>}></Route>
        <Route path="/beauty" element={<Beauty/>}></Route>
        <Route path="/health/:id" element={<BeautyDetail/>}></Route>
        <Route path="/fashion" element={<Fashion/>}></Route>
        <Route path="/honey/:id" element={<FashionDetail/>}></Route>
        <Route path="/lifestyle" element={<Lifestyle/>}></Route>
        <Route path="/words/:id" element={<LifestyleDetail/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/post" element={<CreatePost/>}></Route>
    </Routes>
    <Footer/>
  </Router>  
   </div>

)
}

export default App;
