import React from 'react'
import Navart from '../components/Navart.jsx'
import Footer from '../components/Footer.jsx'

const Layout = ({ children }) => {
    return (
        <div>
            <Navart />
            {children}
            <Footer />
        </div>
    )
}

export default Layout