import React from 'react'
import Logo from '@/src/components/logo'
import NavToggle from '@/src/components/nav-toggle'
import Nav from '@/src/components/nav'
import PageTransition from '@/src/components/page-transition'

const MainLayout = ({ children }) => (
  <div className="layout layout--main">
    <Logo className="z-20" tabIndex="0" />
    <NavToggle className="z-20" tabIndex="0" />
    <Nav className="z-10" />
    <main className="main z-0">
      {children}
    </main>
    <PageTransition className="z-30" />
  </div>
)

export default MainLayout
