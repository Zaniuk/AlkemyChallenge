import {  Button, colors, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
function ResponsiveAppBar() {
  const navigate = useNavigate()
  const {logout, user} :any = useContext(UserContext)
  return (
    <Box sx={{
        backgroundColor: colors.grey[900],
    }}>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mx: 2,
            py: 2,
            mb: 2,
        }}>
            <Typography variant="h6">React ABM</Typography>
            {user ? (<Button onClick={() => logout().then(() => navigate('/login'))} variant="contained" color="secondary">Logout</Button>) :null}
        </Box>
    </Box>
  )
}

export default ResponsiveAppBar