import React, { useEffect, useState } from 'react'

//phoneImgs
import img1 from './../../assets/images/screenshot1.png'
import img2 from './../../assets/images/screenshot2.png'
import img3 from './../../assets/images/screenshot3.png'
import img4 from './../../assets/images/screenshot4.png'
import phone from './../../assets/images/phone1.png'
import { Box } from '@mui/material'

const LoginImg = () => {
    const list = [
        img1, img2, img3, img4
    ]
    const [current, setCurrent] = useState(0)
    useEffect(()=>{
        setInterval(()=>{
            (current===(list.length-1))?
            setCurrent(0):
            setCurrent(current+1);
        }, 10000)
    }, )
    const phoneWidth = '300px'
    const phoneFrame = '15px'
    const phoneTopGap = '10px'
  return (
    <Box sx={{width:'400px', height:'600px', position:'relative', display:{xs:'none', md:'inherit'}}}>
        {/* back one */}
        <Box loading="lazy" sx={{zIndex:'200', 
            background:`
            url(${img1}) no-repeat left ${phoneFrame} top ${phoneFrame}/
            calc(100% - (${phoneFrame} * 2) - ${phoneFrame}) calc(100% - (${phoneFrame} * 2)),
            url(${phone}) no-repeat left top/
            calc(100% - ${phoneFrame}) 100%`,
            width:phoneWidth, height:`calc(100% - ${phoneTopGap})`}}></Box>
        {/* front one */}
        <Box loading="lazy" sx={{zIndex:'400', position:'absolute', 
            bottom: '0px', right:'0px',
            background:
            //screen
            `url(${
                list[3]
                // (current+1===list.length)?list[0]:
                // list[current+1]
            }) no-repeat right ${phoneFrame} top ${phoneFrame}/
            calc(100% - (${phoneFrame} * 2) - ${phoneFrame}) calc(100% - (${phoneFrame} * 2)),
            url(${phone}) no-repeat right top/
            calc(100% - ${phoneFrame}) 100%`,
            width:phoneWidth, height:`calc(100% - ${phoneTopGap})`}}>
             {/* screen */}
            {/* <Box sx={{border:'0px solid red', background:`url(${(current+1===list.length)?list[0]:list[current+1]}) 
                no-repeat right ${phoneFrame} top ${phoneFrame}/
                calc(100% - (${phoneFrame} * 3)) calc(100% - (${phoneFrame} * 2))`,
                width:'100%', height:'100%', animation:'ease-in-out'}}
            /> */}
        </Box>
    </Box>
  )
}

export default LoginImg