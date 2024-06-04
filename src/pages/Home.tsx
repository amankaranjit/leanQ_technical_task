import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className='container'>
            <h2 className='title'>Home  <button onClick={() => navigate('/login')} style={{ float: 'right', fontSize: '16px', marginTop: '10px' }}>Login</button></h2>

        </div>
    );
};

export default Home;
