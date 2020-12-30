import React from 'react'
import Logo from '@/src/components/logo'
import NavToggle from '@/src/components/nav-toggle'
import Nav from '@/src/components/nav'
import PageTransition from '@/src/components/page-transition'

const MainLayout = ({ children }) => (
  <div className="layout layout--main">
    <main className="main">
      {children}
    </main>
    <Nav />
    <Logo />
    <NavToggle />
    <PageTransition />
  </div>
)

export default MainLayout
