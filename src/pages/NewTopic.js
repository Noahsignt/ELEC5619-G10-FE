import React, { useState } from 'react'
import TopAppBar from '../components/AppBar'
import { Box, TextField, Button, Typography } from '@mui/material'
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';

export default function NewTopic() {
    const [weeks, setWeeks] = useState(0);
    const [topic, setTopic] = useState("");
    const [topicStatus, setTopicStatus] = useState(0);

    const topicStatusMapping = [
        {color: "none", text: ""},
        {color: "warning.main", text: "Our AI needs more to work with. Please enter a longer text."},
        {color: "warning.main", text: "Our AI system does not think this is a suitable topic to teach in the time provided. Please try something else."},
        {color: "success.main", text: "Congrats! Our AI system has planned your course! We will redirect you now."}
    ]

    const onClick = () => {
        if(topic.length <= 3) {
            setTopicStatus(1);
        }

        if(topic === 'invalid topic') {
            setTopicStatus(2);
        }

        if(topic === 'valid topic') {
            setTopicStatus(3);
        }
    }

    return(
    <main>
        <TopAppBar />
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh',
            flexGrow: 2,
            gap: 2
        }}
        >
            <SmartToyIcon color='primary' fontSize='large'/>
            <Typography variant="h6" align="center" width="50vw">
                Unlock the power of AI! Enter a topic you want to be taught on, and let our intelligent system guide you.
            </Typography>
            <Box sx={{display: 'flex', gap: 4}}>
                <TextField id="outlined-basic" onChange={(e) => setTopic(e.target.value)} label="Enter topic here..." variant="outlined" />
                <TextField inputProps={{ type: 'number'}} label="Number of Weeks" onChange={(e) => setWeeks(e.target.value)}/>
            </Box>
            <Button onClick={onClick} variant="contained">Generate</Button>
            {topicStatus !== 0 &&
                <Box sx={{backgroundColor: topicStatusMapping[topicStatus].color, padding: 2, borderRadius: 1}}>
                    <Typography color='white'>
                        {topicStatusMapping[topicStatus].text}
                    </Typography>
                </Box>
            }
        </Box>
    </main>)
}