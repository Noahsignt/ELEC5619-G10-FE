import TopAppBar from "../components/AppBar"
import React, { useState } from 'react'
import { Box, Typography, Card, CardContent, CardActionArea } from '@mui/material';

const testObj = [
    {front: 'Click me', back: 'This is the back now!'}
]

const flipStyles = {
    container: {
        perspective: '1000px', // Creates a 3D effect
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '50vh',
        height: '40vh',
        position: 'relative',
        transformStyle: 'preserve-3d',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
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
    },
    back: {
        transform: 'rotateY(180deg)',
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
                <FlashCardDisplay front={testObj[0].front} back={testObj[0].back} />
            </Box>
        </main>
    )
}