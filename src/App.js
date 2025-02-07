import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Frame1 from './container/Home';
//import { StandardSignIn as Login } from './components/Login';

const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const User = localStorage.getItem('user');
        const parsedUser = User && User !== 'undefined' ? JSON.parse(User) : null;

        //to see the LOGIN page, remove the // from line below and add <Route path="login" element={<Login />} /> in the Routes section below
        // if (!parsedUser) navigate('/login');
    }, [navigate]);

    return (
        <Routes>

            <Route path="/*" element={<Frame1 />} />
        </Routes>
    );
};

export default App;