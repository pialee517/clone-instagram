import { Box, ImageList, ImageListItem, Skeleton, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import {imgs as fakeImgs} from './../../fakeData'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Explore = () => {
    const imgs = fakeImgs
  return (
    <ImageList
      sx={{ width: '100%', height: '100%', px:{xs:0, sm:4, md:8}, py:{xs:0,sm:2,md:3}, aspectRatio:'1/1'}}
      variant="quilted"
      cols={3}
      rowHeight={220 || 'calc(100% / 3)'}
    >
      {imgs ? imgs.map((item, idx) => (
        <ImageListItem key={item.src + idx} cols={1} rows={
            (idx%10===0) || ((idx)%10===7) ? 2: 1}>
          <Box id={idx} sx={{background:`url(${item.src}) no-repeat center center/cover`,
           width:`100%`, 
           height:`100%`, 
           display: 'flex'}}>
            <Box sx={{gap:1, position: 'absolute', alignItems: 'center',
                justifyContent: 'center', display:'flex', '& *':{visibility:'collapse'},
                inset: 0, '&:hover':{background: 'rgba(0, 0, 0, 0.2)',
                '& *':{visibility:'inherit', color:'white', fontWeight:'bold'}
                }}}><FavoriteBorderIcon /><Typography variant='h5'>{item.likes}</Typography><ChatBubbleOutlineIcon /><Typography variant='h5'>{item.comments}</Typography></Box>
          </Box>
        </ImageListItem>
      ))
      :
      <Skeleton variant="rectangular" width='100%' height='100%' />}
    </ImageList>
  )
}


export default Explore