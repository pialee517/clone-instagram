import { Box, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import Account from './Account'


const Suggestion = ({accounts=null}) => {
  return (
    <Fragment>
        <Box sx={{pl:2, pr:1, display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
            <Typography component='p' variant="caption" fontWeight='bold' color='gray'>Suggested for you</Typography>
            <Typography component='p' variant="caption" fontWeight='bold' >See All</Typography>
        </Box>
        {accounts && accounts.map((acc, idx)=>(<Account key={acc.name + idx} size='30px' account={acc} action='follow'/>))}
    </Fragment>
  )
}

export default Suggestion