import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import React, { useState } from 'react'
import ListBook from './components/ListBook';
import ListBookByUser from './components/ListBookByUser';
import Login from './components/Login'
import ListBookByCategory from './components/ListBookByCategory';
import Home from './components/Home';
import ListCategory from './components/ListCategory';
import Profile from './components/Profile'
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // PrivateRoute component to restrict access to certain pages
  const PrivateRoute = ({ path, element }) => (
    isLoggedIn === true ? (
      <Route path={path} element={element} />
    ) : (
      <Navigate to="/login" replace />
    )
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/listBook" element={<PrivateRoute path="/listBook" element={<ListBook handleLogout={handleLogout} />} />} />
        <Route path="/listBookByUser" element={<ListBookByUser />}></Route>
        <Route path="/category" element={<ListCategory />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
