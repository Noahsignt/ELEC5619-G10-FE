import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TopAppBar from '../components/AppBar';
import Button from '@mui/material/Button';
import { darken } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';

const darkenColor = (color, amount = 0.2) => {
    return darken(color, amount);
};

const CardItem = ({ topic }) => {
    const backgroundColor = topic ? '#C7CEEA' : '#e0e0e0'; // Gray color for null topic
    const buttonColor = topic ? darkenColor(backgroundColor, 0.4) : '#9e9e9e';

    const CourseButton = (  ) => {
        return topic ? 
            <Button variant="contained" sx={{ backgroundColor: buttonColor, ':hover': { backgroundColor: darkenColor(buttonColor, 0.1) } }}>
                Keep Learning
            </Button> :
            <Button variant="contained" color="primary">
                Get Started
            </Button>
    }

    return (
        <Box sx={{ position: 'relative', flex: 1, height: '50vh' }}>
            <Card sx={{ 
                flex: 1, 
                backgroundColor, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: 2,
                position: 'relative',
                height: '100%'
            }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography 
                        variant="h4" 
                        component="div" 
                        gutterBottom 
                        sx={{ fontWeight: 'bold' }}
                    >
                        {topic ? topic : 'Create a new course!'}
                    </Typography>
                </CardContent>
                <Box sx={{ mt: 2 }}>
                    <CourseButton />
                </Box>
            </Card>
            {topic && (
            <Box sx={{ 
                position: 'absolute', 
                top: 8, 
                right: 8,
                cursor: 'pointer',
            }}>
                <DeleteIcon fontSize='large' sx={{ color: 'white' }} />
            </Box>
            )}
        </Box>
    );
}

export default function Dashboard() {
    return (
        <main>
            <TopAppBar />
            <Box sx={{ 
                width: '100vw', 
                paddingTop: '5vh', 
                textAlign: 'center' 
            }}>
                <Typography variant="h4" component="div" gutterBottom>
                    Your Courses
                </Typography>
            </Box>
            <Box sx={{ 
                width: '100vw', 
                height: '65vh',
                paddingTop: '3vh',
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}>
                <Stack direction="row" sx={{ height: '100%' }}>
                    <CardItem topic={"Shakespeare"}/>
                    <CardItem  />
                    <CardItem  />
                </Stack>
            </Box>
        </main>
    );
}