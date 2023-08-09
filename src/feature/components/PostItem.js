import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, InputBase, Typography } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';



const PostItem = ({author, content}) => {
  return (
    <Card sx={{mx:{xs:3, sm:8, md: 'auto'}, mb:2, maxWidth:{xs:'inherit', md:'500px'}}}>
        <CardHeader sx={{textAlign:'left'}}
            avatar={
            author.avatar ? 
            <Avatar aria-label="avatar" src={author.avatar} />:
            <Avatar aria-label="avatar" />
            }
            action={
            <IconButton aria-label="settings">
                <MoreHorizIcon />
            </IconButton>
            }
            title={author.name}
            subheader={author.id}/>
        <CardMedia sx={{height:'400px', objectFit:'contain', background:'black'}} component="iframe" image={content.src} />
        <CardContent sx={{textAlign:'left'}}>
          <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Box sx={{'& *':{mx:1}}}><FavoriteBorderIcon/><ChatBubbleOutlineIcon/><SendIcon /></Box>
            <BookmarkBorderIcon />
          </Box>
          <Typography>{content.likes} likes</Typography>
          <Box><Typography component='span'></Typography><Typography component='p' overflow='hidden' textOverflow='ellipsis' >
            {content.writing}</Typography>
          <Typography sx={{color:'gray', '&:hover':{cursor:'pointer'}}}>more</Typography>
          </Box>
          <Typography sx={{color:'gray', '&:hover':{cursor:'pointer'}}}>View all {} comments</Typography>
          <InputBase placeholder='Add a comment' sx={{width:'100%', borderBottom:'2px #ddd solid'}}/>
        </CardContent>
    </Card>
  )
}

export default PostItem