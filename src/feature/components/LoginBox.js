import React, {Fragment} from 'react'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

//facebook icon
import FacebookIcon from '@mui/icons-material/Facebook';
//instagram logo
import logo from './../../assets/images/Logo-Instagram-1.png'
//download imgs
import appleImg from './../../assets/images/Yfc020c87j0.png'
import googleImg from './../../assets/images/c5Rp7Ym-Klz.png'

import { Box, Button, InputBase, Typography } from '@mui/material'

const LoginBox = () => {
  const border = '1px #bbb solid'
  const radius = '2px'
  const bgColor = '#eee'
  const btnBgColor = 'rgb(0, 149, 246)'
  const facebookColor = '#385185'
  return (
    <Box sx={{height:'600px', display:'flex', 
      flexDirection:'column', justifyContent:'space-between'}}>
      <Box sx={{width:'350px', mx:'auto', border:border, borderRadius:radius, 
      display:'flex', flexDirection:'column'}}>
        {/* logo */}
        <Box sx={{mt:5, mb:2, background:`url(${logo}) no-repeat center center/cover`, 
          width:'175px', height:'50px', mx:'auto'}} onClick={()=>(console.log('instagram logo click'))}/>
        {/* inputs and button */}
        <Box sx={{py:3, display:'flex', flexDirection:'column', rowGap:1,
          width:'80%', mx:'auto'}}>
          <InputBase type='text' placeholder='Phone number, username, or email'
            sx={{border:border, borderRadius:radius, backgroundColor:bgColor, py:0.5, px:1}}/>
          <InputBase type='password' placeholder='Password'
            sx={{border:border, borderRadius:radius, backgroundColor:bgColor, py:0.5, px:1}}/>
          <Button variant='contained' 
            sx={{my:1, borderRadius:3, backgroundColor:btnBgColor, 
            boxShadow:'none', fontWeight:'700',
            '&:hover':{backgroundColor:btnBgColor, boxShadow:'none'}}}>
              Log in
          </Button>
          <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            {/* <div></div> */}
              <Typography fontWeight='700' variant='caption' sx={{color:'darkgray', px:1}}>OR</Typography>
            {/* <div></div> */}
          </Box>
          {/* facebook */}
          <Box sx={{justifyContent:'center', display:'flex', flexDirection:'row', py:1}}>
            <FacebookIcon fontSize='small' sx={{color:facebookColor}}/>
            <Typography sx={{ml:0.5, color:facebookColor, fontWeight:'700', verticalAlign:'center'}}>
              Log in with Facebook
            </Typography>
          </Box>
          {/* forget pwd */}
          <Typography variant='subtitle2' sx={{color:facebookColor}}>Forget password?</Typography>
       </Box>
      </Box>
      {/* signup box */}
      <Box sx={{mx:'auto', py:3, gap:1, border:border, 
        borderRadius:'2px', width:'350px',
        display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <Typography>Don't have an account?</Typography>
        <Typography sx={{textTransform:'initial', color:btnBgColor, fontWeight:'700'}}>Sign up</Typography>
      </Box>
      {/* no border */}
      <Box sx={{py:1}}>
        <Typography>Get the app.</Typography>
      </Box>
      {/* download pic */}
      <Box sx={{justifyContent:'center', '& *':{px:0.5}, height:'40px'}}>
        <img src={appleImg} width='135px' height='40px' objectfit='contain'/>
        <img src={googleImg} width='135px' height='40px' objectfit='contain'/>
      </Box>
    </Box>
  )
}

export default LoginBox