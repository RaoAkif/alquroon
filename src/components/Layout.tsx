import React, { FunctionComponent } from 'react'
import Footer from "./Footer"
import "./Layout.css"

type LayoutProps = {
  title: string,
  children: React.ReactNode
}

export const Layout: FunctionComponent<LayoutProps> = ({ title, children }) => 
  <div id='layout'>
    <h1>{title}</h1>
    <div id="paragraph"> {children} </div>
    <Footer />
  </div>

export default Layout
