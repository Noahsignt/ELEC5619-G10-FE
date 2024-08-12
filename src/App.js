import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import './App.css'

export default function App() {
  return (
    <main>
      <Card sx={{ maxWidth: 600, margin: 'auto'}}>
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
        <Button variant="contained" color="primary" sx={{ m: 2 }}>
          Register Now
        </Button>
      </Card>
    </main>
  )
}