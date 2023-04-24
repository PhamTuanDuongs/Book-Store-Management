import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');
  const navigate = useNavigate();


  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch('http://localhost:9999/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            setNotification('Please enter valid credentials');
          } else {
            setNotification('Login successful!');
            sessionStorage.setItem('pageView', resp.username);
            sessionStorage.setItem('role', JSON.stringify(resp.roles[0].roleName));
            onCustomButtonClick();
          }
        })
        .catch((err) => {
          setNotification(`Login failed due to: ${err.message}`);
        });
    }
  };

  const onCustomButtonClick = () => {
    navigate('/home');
  };

  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
      setNotification('Please enter username');
    }
    if (password === '' || password === null) {
      result = false;
      setNotification('Please enter password');
    }
    return result;
  };

  return (
    <div className='h-screen flex bg-gray-bg1'>
      <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
        <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
          Log in to your account 🔐
        </h1>

        {notification !== '' && (
          <div className='bg-red-200 p-3 mb-3 text-red-800 rounded-md'>
            {notification}
          </div>
        )}

        <form onSubmit={proceedLogin}>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type='text'
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id='text'
              required
              placeholder='Your username'
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id='password'
              required
              placeholder='Your Password'
            />
          </div>

          <div className='flex justify-center items-center mt-6'>
            <button
              className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
