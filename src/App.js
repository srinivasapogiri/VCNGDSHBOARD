import React, {useEffect, useState}from 'react';
import './App.css';
import UserAuth from './UserAuth';
import Home from './Home'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Footer from './Footer/Footer';

function App() {
  const [presentUser, setPresentUser] = useState(null);
  
  useEffect(()=>{
    const auth = getAuth();

      onAuthStateChanged(auth,(user)=>{
        if(user){
          setPresentUser({
            uid:user?.uid,
            email:user?.email
          })
        }
        else{
          setPresentUser(null)
        }
      })
  },[])
  return (
    <div className="App">
      <center>
        {
           presentUser  ? <Home/>:  <UserAuth/>
        }
     
        <Footer/>
      </center>
    </div>
  );
}                                                 

export default App;
