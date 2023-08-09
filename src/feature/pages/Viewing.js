import React,{ Fragment } from 'react'
import Nav from '../components/Nav'
import { Box, CssBaseline, Typography } from '@mui/material'
import AvatarBanner from './../components/AvatarBanner'
import Subnav from './../components/Subnav'
import SiteMap from '../components/SiteMap'
import PostItem from './../components/PostItem'
import Account from './../components/Account'
import Suggestion from './../components/Suggestion'
import { accounts as fakeAccounts, 
          user as fakeUser,
          content as fakeContent, 
          author as fakeAuthor } from '../../fakeData'


const Viewing = () => {
  const accounts = fakeAccounts
  const author = fakeAuthor
  const content = fakeContent
  const user = fakeUser
  return (
      <Box sx={{m:2, display:'flex', justifyContent:'space-between', overflowY:'scroll'}}>
        <Box sx={{flex:'auto', justifyContent:'center'}}>
          <AvatarBanner accounts={accounts} />
          <PostItem author={author} content={content} />
        </Box>
        <Box sx={{display:{lg:'flex', xs:'none'}, flexDirection:'column', width:{xs:0, md:'35%'}}}>
          <Account account={user}/>
          <Suggestion accounts={accounts}/>
          <SiteMap lang={false} alignTxt='left' pX={2} pY={1} fontColor='#888' />
        </Box>
      </Box>
  )
}

export default Viewing