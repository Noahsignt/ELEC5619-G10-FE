import * as React from 'react'
import TopAppBar from '../components/AppBar'
import { Box, TextField, Button, Typography } from '@mui/material'
import SmartToyIcon from '@mui/icons-material/SmartToy';

export default function NewTopic() {
    return(
    <main>
        <TopAppBar />
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexGrow: 2,
            gap: 2
        }}
        >
            <SmartToyIcon color='primary' fontSize='large'/>
            <Typography variant="h6" align="center" width="50vw">
                Unlock the power of AI! Enter a topic you want to be taught on, and let our intelligent system guide you.
            </Typography>
            <TextField id="outlined-basic" label="Enter topic here..." variant="outlined" />
            <Button variant="contained">Generate</Button>
        </Box>
    </main>)
}