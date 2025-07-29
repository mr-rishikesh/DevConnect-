import { useEffect, useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {BrowserRouter , Routes , Route, useNavigate} from 'react-router-dom';

import HomeLanding from "./components/HomeLanding";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


import { useAuthStore } from "./store/useAuthStore";
import { Toaster } from "react-hot-toast";

import { Loader } from "lucide-react";
import { Navigate } from "react-router-dom";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import CreatePost from "./components/CreatePost";

import { initFlowbite } from 'flowbite';
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import Emergency from "./pages/Emergency";
import ProfilePage from "./components/ProfilePage";



function App() {

   const {authUser , checkAuth , isCheckingAuth} = useAuthStore()


  useEffect(() => {
    checkAuth()
    initFlowbite();
  } , [checkAuth])

  console.log({authUser})
  if(isCheckingAuth && !authUser) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader  className='size-10 animate-spin'/>
      </div>
    )
  }
 
 

  return (<>
   
    
   
          
        
   
    
      <BrowserRouter>
       <Navbar/>
      
     
 
      <Routes>
        <Route path="/signup" element={authUser ? <Navigate to="/home" /> :  <SignUp/>} />
        <Route path="/" element={<HomeLanding/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/signin" element={authUser ? <Navigate to="/home" /> :  <SignIn/>} />
        <Route path="/home" element={authUser ?   <Home/>: <Navigate to="/signin" />} />
     {/* //   <Route path="/profile" element={authUser ?   <ProfilePage/>: <Navigate to="/signin" />} /> */}
        <Route path="/contacts" element={authUser ?   <Contacts/>: <Navigate to="/signin" />} />
        <Route path="/emergency" element={authUser ?   <Emergency/>: <Navigate to="/signin" />} />

      </Routes>
    </BrowserRouter> 
    <Toaster />
    </>)
  
}

export default App
