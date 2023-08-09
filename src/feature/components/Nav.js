import { AppBar, Avatar, Box, Icon, IconButton, InputBase, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Toolbar, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
import React, { Fragment } from 'react'
import { NavLink, useNavigate } from "react-router-dom";


import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import InstagramIcon from '@mui/icons-material/Instagram';


const Nav = () => {
  const navigate = useNavigate()
  const theme = useTheme();
  const upM = useMediaQuery(theme.breakpoints.up('md'));
  const xs = useMediaQuery(theme.breakpoints.down('sm'));

  const BtnHover = styled(ListItemButton)({
    '&:hover':{borderRadius:'10px'},
  })

  const Menu = ({icon, name, path}) =>{
    return (
      <NavLink sx={{p:1}} to={path} className={({ isActive }) =>
      isActive ? "active" : ""}>
        <BtnHover>{icon}{upM && <ListItemText sx={{pl:2}}>{name}</ListItemText>}</BtnHover>
      </NavLink>
    )
  }
  
  return (
    <Fragment>
      {xs? 
      <AppBar position='sticky' sx={{background:'white', borderBottom:'1px #ddd solid', boxShadow:'none', py:1}}>
        <Toolbar sx={{justifyContent:'space-between'}}>
          <img src={logo} width='100px' height='50px' objectfit='contain' />
          <Box sx={{textWrap: 'nowrap'}}>
            <InputBase placeholder='Search' startAdornment={<SearchIcon />} endAdornment={<CancelIcon sx={{color:'gray'}}/>} 
              sx={{border:'1px #ddd solid', background:'#eee', px:2, py:0.5, borderRadius:'10px', mr:1, flexWrap:'nowrap'}}/>
            <FavoriteBorderIcon sx={{color:'black'}}/>
          </Box>
        </Toolbar>
      </AppBar>
      : 
      <AppBar sx={{'& .MuiAppBar-root': {px:5}, width:{ md:'244px', sm:'fit-content'}, height:'100vh', overflowY:'visible', minHeight:'650px', 
         border:'1px #eee solid', position:'sticky', background:'white', boxShadow:'none', justifyContent:'space-between'}}>
        <Box sx={{m:1}}>
        {upM ? <Box sx={{background:`url(${logo}) no-repeat left center/ cover`, 
          width: {md:'100px', xs:'80px'}, height:'30px', p: {md: 3, xs: 1}, ml: {md: 2, xs: 0}}} 
          onClick={(e)=>{e.preventDefault(); navigate('/')}}></Box>
        :
        <List>
          <BtnHover onClick={(e)=>{e.preventDefault(); navigate('/')}}>
          <InstagramIcon sx={{color:'black'}}/>
          </BtnHover></List>}
          <List>
            <Menu icon={<HomeIcon />} name='Home' path='/home' />
            <Menu icon={<SearchIcon />} name='Search' path='/search'/>
            <Menu icon={<ExploreIcon />} name='Explore' path='/explore'/>
            <Menu icon={<SmartDisplayIcon />} name='Reels' path='/reels'/>
            <Menu icon={<MessageIcon />} name='Messages' path='/messages'/>
            <Menu icon={<FavoriteIcon />} name='Notifications' path='/notifications'/>
            <Menu icon={<AddBoxIcon />} name='Create' path='/ereate'/>
            <Menu icon={<Avatar sx={{width:'26px', height:'26px'}}/>} name='Profile' path='/profile'/>
          </List>
          </Box>
          <List sx={{rowGap:0, m:1}}>
            <Menu icon={<MenuIcon />} name='More' />
          </List>
      </AppBar>}
    </Fragment>
  )
}

export default Nav