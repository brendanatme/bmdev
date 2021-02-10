import React from 'react'
import Logo from '~/src/components/logo'
import NavToggle from '~/src/components/nav-toggle'
import Nav from '~/src/components/nav'
import PageTransition from '~/src/components/page-transition'
import * as layoutModel from '~/src/models/layout.model'

const MainLayout = ({ children }) => {
  const navIsOpen = layoutModel.select.navIsOpen()

  return (
    <div className="layout layout--main">
      <a className="sr-only" href="#content">Skip to content</a>
      <Logo className="z-20" tabIndex="0" />
      <NavToggle className="z-20" tabIndex="0" />
      <Nav className="z-10" />
      <main id="content" className="main z-0" aria-hidden={navIsOpen ? 'true' : 'false'}>
        {children}
      </main>
      <PageTransition className="z-30" />
    </div>
  )
}

export default MainLayout
