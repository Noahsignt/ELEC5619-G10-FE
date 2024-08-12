import * as React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import TopAppBar from '../components/AppBar';
import { TextField } from '@mui/material';

const InfoBloc = () => {
    return (
        <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
                Unlock Your Potential
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Personalized, AI-driven learning experiences tailored to your unique journey. Whether you're just starting or diving into advanced concepts, our platform adapts to your knowledge level, helping you master new skills efficiently and affordably.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                Start learning today and take control of your education—no matter where you are or what you want to achieve.
            </Typography>
        </CardContent>
    )
}

const RegisterBloc = () => {
    return (
        <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
                Create Your Account
            </Typography>
            <TextField 
                fullWidth 
                label="Name" 
                variant="outlined" 
                sx={{ mt: 2 }} 
            />
            <TextField 
                fullWidth 
                label="Email" 
                variant="outlined" 
                sx={{ mt: 2 }} 
            />
            <TextField 
                fullWidth 
                label="Password" 
                type="password" 
                variant="outlined" 
                sx={{ mt: 2 }} 
            />
        </CardContent>
    )
}


export default function Home() {
    const [isRegistering, setIsRegistering] = useState(false);

    const handleClick = () => setIsRegistering(!isRegistering);

    return(
    <main>
      <TopAppBar />
      <Card sx={{ maxWidth: 600, margin: 'auto'}}>
        {isRegistering ? <RegisterBloc /> : <InfoBloc />}
        <Button variant="contained" color="primary" sx={{ m: 2 }} onClick={handleClick}>
            {isRegistering ? "Sign up" : "Register now"}
        </Button>
      </Card>
    </main>)
}