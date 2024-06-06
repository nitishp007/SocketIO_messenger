import { Button, FormControl, Input } from '@mui/base';
import { FormLabel, Stack } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = async () => {
        if (!name || !email || !password || !confirmpassword) {
            alert("Please fill in all the credentials"); 
            return;
        }
        if (password !== confirmpassword) {
            alert('Passwords Do Not Match');
            return;
        }
        console.log(name, email, password);
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const { data } = await axios.post(
                "http://localhost:4000/api/user",
                {
                    name,
                    email,
                    password,
                },
                config
            );
            console.log(data);
            alert('Registration Successful');
            localStorage.setItem("userInfo", JSON.stringify(data));
            navigate("/chat");
        } catch (error) {
            alert(`Error Occurred: ${error.response?.data?.message || error.message}`);
            console.log(error);
        }
    };

    return (
        <Stack spacing="5px" alignItems={'center'}>
            <FormControl id="first-name" required>
                <FormLabel>Name</FormLabel>
                <Input
                    value={name} 
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
            <FormControl id="email" required>
                <FormLabel>Email Address</FormLabel>
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
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormControl>
            <FormControl id="confirm-password" required> 
                <FormLabel>Confirm Password</FormLabel>
                <Input
                    value={confirmpassword} 
                    type="password"
                    placeholder="Confirm password"
                    onChange={(e) => setConfirmpassword(e.target.value)}
                />
            </FormControl>
            <Button onClick={submitHandler} style={{ position: 'absolute', bottom: '10%', width: '20%' }}>
                Sign Up
            </Button>
        </Stack>
    );
};

export default Signup;
