import { Avatar, Card, CardHeader, Typography } from '@mui/material'
import React, { Fragment } from 'react'

const Account = ({size='55px', account, action='Switch'}) => {
  return (
    <Fragment>
      <Card elevation={0} sx={{py:0}}>
        <CardHeader sx={{textAlign:'left', '& .MuiCardHeader-action':{alignSelf:'center'}}} 
          avatar={
            account.avatar ? <Avatar src={account.avatar} sx={{width:size, height:size}} />:<Avatar sx={{width:size, height:size}} />}
          title={account.id}
          subheader={account.name}
          action={ 
              <Typography variant='caption' fontWeight='bold' sx={{color:'rgb(0, 149, 246)', textTransform:'capitalize'}}>{action}</Typography>}
        />
      </Card>
    </Fragment>
  )
}

export default Account