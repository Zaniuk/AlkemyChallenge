import React from 'react'
import {Outlet} from 'react-router-dom'
import {Container } from '@mui/material'
import ResponsiveAppBar from './ResponsiveAppBar'
function Layout() {
  return (
    <>
    <ResponsiveAppBar/>
    <Container maxWidth='xl'>
        <Outlet/>
    </Container>
    </>
  )
}

export default Layout