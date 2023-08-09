import React, {Fragment} from 'react'
import LoginBox from '../components/LoginBox'
import LoginImg from '../components/LoginImg'
import { Box, Typography } from '@mui/material'
import SiteMap from '../components/SiteMap';

const Login = () => (
  <Fragment>
    <Box sx={{display:'flex', 
      flexDirection:{xs:'column', md:'row'}, mt:4,
      width:'100%', rowGap:3, gap:4, justifyContent:'center', justifyItems:'center'}}>
      <LoginImg />
      <LoginBox />
    </Box>
   <SiteMap />
  </Fragment>
)

export default Login