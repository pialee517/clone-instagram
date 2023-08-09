import { Avatar, List, ListItemAvatar, Paper, ListItem, ListItemText } from '@mui/material'
import React from 'react'


const AvatarBanner = ({accounts}) => {
  return (
    <Paper elevation={0} sx={{p:2}}>
        <List sx={{display:'flex', flexDirection:'row', gap:1}}>
          {accounts && accounts.map((acc, idx) =>(
          <ListItem key={acc.name + idx} sx={{display:'flex', flexDirection:'column', width:'fit-content'}} >
            <ListItemAvatar sx={{background:'linear-gradient(#e66465, #9198e5)', 
              borderRadius:'50%', width:'70px', height:'70px', 
              justifyContent:'center', alignItems:'center'}}>
                <Avatar src={acc.avatar ? acc.avatar : null} loading="lazy" sx={{border:'2px white solid', width:'calc(100% - 6px)', height:'calc(100% - 6px)', transform:'translate(3px, 3px)'}}/>
            </ListItemAvatar>
            <ListItemText>{acc.name}</ListItemText>
          </ListItem>
          ))}
        </List>
    </Paper>
  )
}

export default AvatarBanner