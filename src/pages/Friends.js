import Reac, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Autocomplete, TextField } from '@mui/material';
import TopAppBar from '../components/AppBar'; 
import LaunchIcon from '@mui/icons-material/Launch';

const testObj = [
    {name: 'Michael', email: 'michael@gmail.com'},
    {name: 'Ally', email: 'ally@gmail.com'},
    {name: 'Ben', email: 'ben@gmail.com'},
    {name: 'Rish', email: 'rish@gmail.com'},
]

const testInputFriendsObj = [
    {name: 'Steven', email: 'steven@gmail.com'}
]

const FriendDisplay = ({ friend }) => {
    return (
        <Card sx={{ width: '50%' }}>
            <CardContent sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box>
                    <Typography variant="h5" component="div">
                        {friend.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {friend.email}
                    </Typography>
                </Box>
                <IconButton 
                    sx={{
                        backgroundColor: 'primary.main', 
                        color: 'white', 
                        '&:hover': {
                            backgroundColor: 'primary.dark', 
                        },
                        borderRadius: '4px'
                    }}
                >
                    <LaunchIcon fontSize='large' />
                </IconButton>
            </CardContent>
        </Card>
    );
};

const FindFriendDisplay = () => {
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([])

    //autocomplete only when length >= 4
    useEffect(() => {
        const newOpts = inputValue.length >= 4 
        ? testInputFriendsObj.filter(option => 
            option.name.toLowerCase().includes(inputValue.toLowerCase())
          )
        : [];

        setFilteredOptions(newOpts);
    }, [inputValue])

    return (
        <Box sx={{ width: '100%', mt: 2 }}>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
                options={filteredOptions}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                    <TextField 
                        {...params} 
                        label="Find a friend" 
                        variant="outlined" 
                    />
                )}
                renderOption={(props, option) => (
                    <li {...props} key={option.email}>
                        <Typography>{option.name} <i>({option.email})</i></Typography>
                    </li>
                )}
                isOptionEqualToValue={(option, value) => option.email === value.email}
            />
        </Box>
    );
};

export default function Friends() {
    return (
        <main >
            <TopAppBar />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', gap: '32px', paddingTop: '32px' }}>
                <Typography variant='h2'>
                    Noah's Friends
                </Typography>
                {testObj.map((e) => <FriendDisplay friend={e} />)}
                <Box sx={{paddingBottom: '32px', width: '50%'}}>
                    <Typography variant='h2' textAlign='center'>
                        Add Friends
                    </Typography>
                    <FindFriendDisplay />
                </Box>
            </Box>
        </main>
    );
}