import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const withAuthAA = (Component) => {
  const AuthRoute = (props) => {
    const role = JSON.parse(sessionStorage.getItem('role'));
    const navigate = useNavigate();
    const isAuthenticated = role && role[0] && role[0].roleId === 2;
    
    useEffect(() => {
      if (!isAuthenticated || isAuthenticated === null) {
        navigate('/login');
      }
    }, [isAuthenticated, navigate]);

    if (!isAuthenticated) {
      return null;
    }

    return <Component {...props} />;
  };

  return AuthRoute;
};

export default withAuthAA;
