import { Outlet } from 'react-router-dom'
import React, { Fragment } from 'react'
import Nav from './../components/Nav'
import Header from './Header'
import { Box } from '@mui/material'
import Footer from './Footer'

const Layout = () => {
  return (
    <Fragment>
      <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row', height:'100vh', overflowY:'hidden',  minWidth:'400px'}}}>
        <Header />
        <Box component='main' sx={{width:'100%', overflowX:'scroll', height:'inherit'}}>
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Fragment>
  )
}

export default Layout