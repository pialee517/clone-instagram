import { Avatar, Box, List, ListItem, styled, useMediaQuery, useTheme} from '@mui/material'
import React, { Fragment } from 'react'
import { NavLink } from "react-router-dom";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import logo from './../../assets/images/Logo-Instagram-1.png'
import sLogo from './../../assets/images/Instagram-Logo.png'
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import ExploreIcon from '@mui/icons-material/Explore';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';



const TheListItem = styled(ListItem)({
    width:'fit-content',
    '& svg':{
      width:'32px',
      height:'32px',
    }
  })

const MobileMenu = ({icon, path}) =>{
    return(
      <TheListItem>
        <NavLink to={path} end>{icon}</NavLink>
      </TheListItem>
    )
  }

const Footer = () => {
const theme = useTheme();
const xs = useMediaQuery(theme.breakpoints.down('sm'));
  return (
      <Box sx={{display:{xs:'inherit', sm:'none'},
        background:'white', border:'1px #eee solid', position:'absolute', bottom:'0px', minWidth:'400px', width:'100%'}}>
      <List
        sx={{display:'flex', flexDirection:'row', '& .MuiListItem-root':{padding:1},
        alignItems:'center',
        gap:1, justifyContent:'center'}}>
        <MobileMenu icon={<HomeIcon />} path='/home' />
        <MobileMenu icon={<ExploreIcon />} path='/none' />
        <MobileMenu icon={<SmartDisplayIcon />} path='/none' />
        <MobileMenu icon={<AddBoxIcon />} path='/none' />
        <MobileMenu icon={<MessageIcon />} path='/none' />
        <MobileMenu icon={<AddBoxIcon />} path='/none' />
        <Avatar sx={{width:'32px', height:'32px',}}/>
      </List>  
    </Box>
  )
}

export default Footer