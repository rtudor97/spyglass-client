import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CottageIcon from '@mui/icons-material/Cottage';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import ElderlyIcon from '@mui/icons-material/Elderly';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import FlightIcon from '@mui/icons-material/Flight';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  

 function FloatingActionButtonExtendedSize() {
    const navigate = useNavigate();

    const goToHouseGoals = () =>{
        navigate("/housegoals");
    }
    
    return (
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab variant="extended" color="primary" aria-label="add" onClick={goToHouseGoals} >
          <CottageIcon sx={{ mr: 1 }} />
          House
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add">
          <DriveEtaIcon sx={{ mr: 1 }} />
          New Car
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add">
          <FlightIcon sx={{ mr: 1 }} />
          Vacation
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add">
          <LaptopChromebookIcon sx={{ mr: 1 }} />
          Education
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add">
          <LocalHospitalIcon sx={{ mr: 1 }} />
          Emergency
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add">
          <ElderlyIcon sx={{ mr: 1 }} />
          Retirement
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add">
          <EmojiObjectsIcon sx={{ mr: 1 }} />
          Custom
        </Fab>
      </Box>
    );
  }
  
  

    function SearchAppBar() {

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton 
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              
              >
                
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Vanguard
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    );
    }


function Home(){
    const navigate = useNavigate();
    const logMeOut = () => {
        sessionStorage.removeItem("Auth Token");
        navigate("/login");
    }


    useEffect(()=>{
        // axios.get("http://localhost:8080/me")
    },[])


    return(<div>
        <SearchAppBar></SearchAppBar>
        <h2>Welcome, User!</h2>
        <h4>What are your current saving goals?</h4>
        <FloatingActionButtonExtendedSize></FloatingActionButtonExtendedSize>
        <button onClick={logMeOut}>Log Out</button>
    </div>);
}
export default Home;