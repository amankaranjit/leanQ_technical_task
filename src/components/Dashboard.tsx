import React, { useEffect } from 'react';
import ToyWrapper from './toy/ToyWrapper';
import QuoteWrapper from './quote/QuoteWrapper';
import SportsWrapper from './sports/SportsWrapper';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const isLoggedIn = Cookies.get("isLoggedIn");
        if (isLoggedIn !== "true") {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        Cookies.remove("isLoggedIn");
        navigate('/');
    };

    return (
        <div className='container'>
            <h2 className='title'>Dashboard  <button style={{ float: 'right', fontSize: '16px' }} onClick={handleLogout}>Logout</button></h2>

            <ToyWrapper />
            <QuoteWrapper />
            <SportsWrapper />
        </div>
    );
};

export default Dashboard;
