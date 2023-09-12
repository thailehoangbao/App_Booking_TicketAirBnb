import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './_components/Header/Header'
import Footer from './_components/Footer/Footer'

export default function HomeTemplates() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
