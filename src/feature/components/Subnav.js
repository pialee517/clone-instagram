import { AppBar, Avatar, Box, IconButton, InputBase, List, ListItem, ListItemIcon, Toolbar } from '@mui/material'
import React, { Fragment } from 'react'
import logo from './../../assets/images/Logo-Instagram-1.png'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Subnav = () => {
  const buttons = [<HomeIcon />, <SendIcon />, <ExploreIcon />, <FavoriteBorderIcon />]
  return (
    <Toolbar sx={{borderTop:'1px solid lightgray', borderBottom:'1px solid lightgray', justifyContent:'space-between', mt:1}}>
        <Box>
            <Box sx={{background:`url(${logo})no-repeat center center/cover`, width:'100px', height:'20px'}}></Box>
        </Box>
        <Box sx={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
            <SearchIcon />
            <InputBase 
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{px:1}} />
        </Box>
        <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          {buttons.map((item, idx)=>(
            <ListItem sx={{px:1}} key={idx}>
              {item}
            </ListItem>
          ))}
          <Avatar sx={{width:'24px', height:'24px'}}></Avatar>
        </Box>
    </Toolbar>
  )
}

export default Subnav