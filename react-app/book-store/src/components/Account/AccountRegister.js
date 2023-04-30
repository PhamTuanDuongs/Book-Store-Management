import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [dob, setDob] = useState('');
  const [notification, setNotification] = useState('');
  const [avatar, setAvatar] = useState(null);
  const handleSignup = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('email', email);
    formData.append('displayName', displayName);
    formData.append('dob', dob);
    formData.append('avatar', avatar);

    axios.post('http://localhost:9999/users/signup', formData)
      .then(response => {
        console.log(response.data);
        setNotification(response.data)
        // do something after successful signup
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  return (
    <form onSubmit={handleSignup}>
      <p>{notification}</p>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label><br />
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label><br />
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label><br />
      <label>
        DisplayName:
        <input type="text" value={displayName} onChange={e => setDisplayName(e.target.value)} />
      </label><br />
      <label>
        Dob:
        <input type="date" value={dob} onChange={e => setDob(e.target.value)} />
      </label><br />
      <label>
        Avatar:
        <input type="file" accept="image/*" onChange={handleAvatarChange} />
      </label><br />
      <button type="submit">Sign up</button>
    </form>
  );
}

export default SignupForm;
