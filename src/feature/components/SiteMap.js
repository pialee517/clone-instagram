import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Typography } from '@mui/material';


const SiteMap = ({lang=true, alignTxt='center', pX=4, pY=8, fontColor='#555'}) => {
  return (
    <Box component='section' sx={{py:pY, px:pX, '& p':{fontSize:'13px', whiteSpace:'nowrap', px:1, color:fontColor}}}>
      <Box sx={{display:'flex', flexDirection:'row', rowGap:1, justifyContent:alignTxt, flexWrap:'wrap'}}>
        <Typography>Meta</Typography>
        <Typography>About</Typography>
        <Typography>Blog</Typography>
        <Typography>Jobs</Typography>
        <Typography>Help</Typography>
        <Typography>API</Typography>
        <Typography>Privacy</Typography>
        <Typography>Terms</Typography>
        <Typography>Top Accounts</Typography>
        <Typography>Locations</Typography>
        <Typography>Instagram Lite</Typography>
        <Typography>Threads</Typography>
        <Typography>Contact Uploading & Non-Users</Typography>
        <Typography>Meta Verified</Typography>
      </Box>
      <Box sx={{display:'flex', flexDirection:'row', justifyContent:alignTxt, pt:2, alignItems:'center'}}>
        <Box sx={{display:lang?'flex':'none', flexDirection:'row'}}>
          <Typography>English</Typography>
          <KeyboardArrowDownIcon fontSize='small'/>
        </Box>
        <Typography>© 2023 Instagram from Meta</Typography>
      </Box>
      </Box>
  )
}

export default SiteMap