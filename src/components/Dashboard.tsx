import React, { useEffect, useState } from 'react';
import ToyWrapper from './toy/ToyWrapper';
import QuoteWrapper from './quote/QuoteWrapper';
import SportsWrapper from './sports/SportsWrapper';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const email = localStorage.getItem('email');
        const password = sessionStorage.getItem('password');

        if (email && password) {
            setAuthenticated(true);
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('email');
        sessionStorage.removeItem('password');
        navigate('/');
    };

    return (
        <div className='container'>
            {authenticated && <><h1>Dashboard</h1>
                <button onClick={handleLogout}>Logout</button>
                <ToyWrapper />
                <QuoteWrapper />
                <SportsWrapper /></>}

        </div>
    );
};

export default Dashboard;
