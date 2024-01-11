import React from 'react';
import { auth } from './Firebase';
import LeftNavbar from './Navbars/Leftnavbar';
import MainContent from './Navbars/Maincontent';
import './Home.css'

const Home = () => {
    const handleLogout = async () => {
        try {
            await auth.signOut();
            // The user is now signed out
            console.log('User signed out');
        } catch (error) {
            console.error('Error signing out:', error.message);
        }
    };

    return (
        <div>
            <div id="home-header">
                <h1>Welcome to the Home Page!</h1>
                <button onClick={handleLogout}>SignOut</button>
            </div>
            <div id="main-content">
                    <div id="leftnav">
                         <LeftNavbar />
                     </div>
                     <div id="mainsection">
                        <MainContent />
                    </div>
                    
            </div>
        </div>
    );
};

export default Home;
