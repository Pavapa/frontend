import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
//import { StandardSignIn as Login } from './components/Login';
import  { StandardSignIn as Login } from './components/Login';
import Frame1 from './container/Home';



const App = () => {
 const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user');
    const parsedUser = User && User !== 'undefined' ? JSON.parse(User) : null;

if (!parsedUser) {
  navigate('/login');
}
  }, [navigate]);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Frame1 />} />
    </Routes>
  );
};

export default App;