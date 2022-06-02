import React from 'react'
import {Box} from "@mui/material"

const MuiResponsiveness = () => {
  return (
    <Box
    sx={{
        height:'200px',
        width:{
            xs:100,
            sm:200,
            md:300,
            lg:400,
            xl:500
        },
        backgroundColor:'red'
    }}>

    </Box>
  )
}

export default MuiResponsiveness