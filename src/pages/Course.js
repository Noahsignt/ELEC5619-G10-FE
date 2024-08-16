import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TopAppBar from '../components/AppBar';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const testObj = [
    {name: "Literature", week: 1, link: "/literature", finished: true},
    {name: "Early Life", week: 2, link: "/literature", finished: true},
    {name: "First Works", week: 3, link: "/literature", finished: false},
    {name: "Career", week: 4, link: "/literature", finished: false},
    {name: "Legacy", week: 5, link: "/literature", finished: false}
]

const TimelineObj = ({link, week, name, finished}) => {
    return (
        <TimelineItem sx={{minHeight: '110px'}} >
            <TimelineOppositeContent
                sx={{
                    m: 'auto 16px auto 0',
                    textAlign: 'right',
                    flex: 0.2,
                }}
            >
                <Typography variant="h4" color="primary">
                    {"W" + week}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot variant={finished ? 'filled' : 'outlined'} color={finished ? 'success' : 'error'} />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ m: 'auto 0 auto 16px' }}>
                <a href={link} style={{ 
                        textDecoration: 'none', 
                        color: 'inherit'
                    }}>
                    <Typography variant="h6">
                        {name}
                    </Typography>
                </a>
            </TimelineContent>
        </TimelineItem>
    );
};

export default function Course() {
    return (
        <main>
            <TopAppBar />
            <Typography variant='h3' color='primary' align='center' sx={{paddingTop: '3vh'}}>
                Your Shakespeare Course
            </Typography>
            <Box sx={{ 
                width: '100vw', 
                textAlign: 'center' ,
                display: 'flex',
                flexDirection: 'column',
                justifyItems: 'center',
                alignItems: 'center',
                height: '100%'
            }}>
                <Timeline>
                    {testObj.map(e => <TimelineObj link={e.link} week={e.week} name={e.name} finished={e.finished} />)}
                </Timeline>
            </Box>
        </main>
    );
}