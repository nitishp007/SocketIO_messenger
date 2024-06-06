import { Button, FormControl, Input } from '@mui/base';
import { FormLabel, Stack } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = async () => {
    if (!email || !password) {
      alert('Please fill in the credentials');
      return;
    }

    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const { data } = await axios.post(
        'http://localhost:4000/api/user/login',
        { email, password },
        config
      );
      console.log(data);
      alert('Login Successful');
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate('/chat');
    } catch (error) {
      alert(`Error Occurred: ${error.response?.data?.message || error.message}`);
      console.log(error);
    }
  };

  return (
    <Stack alignItems={'center'} spacing={2}>
      <FormControl id="email" required>
        <FormLabel>Email</FormLabel>
        <Input
          value={email}
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" required>
        <FormLabel>Password</FormLabel>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
        />
      </FormControl>
      <Button onClick={submitHandler} style={{ position: 'absolute', bottom: '10%', width: '20%' }}>
        Login
      </Button>
    </Stack>
  );
};

export default Login;
