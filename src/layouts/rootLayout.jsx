import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>

}

export default RootLayout