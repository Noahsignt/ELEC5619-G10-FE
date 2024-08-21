import TopAppBar from "../components/AppBar"
import React, { useState } from 'react'
import { Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const testObj = [
    {front: 'Click me', back: 'This is the back now!'}
]


const flipStyles = {
    container: {
        perspective: '1000px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
    },
    card: {
        width: '50vh',
        height: '40vh',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: 'rotateY(0deg)', 
        transition: 'transform 1s ease',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    cardFlipped: {
        transform: 'rotateY(180deg)', 
    },
    face: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        boxSizing: 'border-box',
        backgroundColor: 'primary.main', 
        color: 'white',
    },
    back: {
        transform: 'rotateY(180deg)',
        backgroundColor: 'white', 
        color: 'primary.main', 
    },
};

const FlashCardDisplay = ({ front, back }) => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    };

    return (
        <Box sx={flipStyles.container.alignItems} onClick={handleClick}>
            <Card sx={{ ...flipStyles.card, ...(flipped && flipStyles.cardFlipped) }}>
                {!flipped ?
                <CardContent sx={{ ...flipStyles.face }}>
                    <Typography variant="h3">{front}</Typography>
                </CardContent>
                :
                <CardContent sx={{ ...flipStyles.back }}>
                    <Typography variant="h3">{back}</Typography>
                </CardContent>}
            </Card>
        </Box>
    );
};

export default function Flashcards() {
    const [idx, setIdx] = useState(0);

    return (
        <main>
            <TopAppBar />
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
                <IconButton>
                    <ChevronLeftIcon fontSize="large" />
                </IconButton>
                <FlashCardDisplay front={testObj[0].front} back={testObj[0].back} />
                <IconButton>
                    <ChevronRightIcon fontSize="large" />
                </IconButton>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white',}}>
                <PriorityHighIcon sx={{ backgroundColor: 'warning.dark', paddingTop: 2, paddingBottom: 2, paddingLeft: 2, borderTopLeftRadius: 4, borderBottomLeftRadius: 4}}/>
                <Typography sx={{ backgroundColor: 'warning.dark', paddingTop: 2, paddingBottom: 2, paddingRight: 2, borderTopRightRadius: 4, borderBottomRightRadius: 4}}>
                    Click on the card to flip it and click the arrows to navigate through your flashcards.
                </Typography>
            </Box>
        </main>
    )
}