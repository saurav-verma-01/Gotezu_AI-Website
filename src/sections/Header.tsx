import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function Header() {
  return (
    <header className='sticky top-0'>
        <Banner />
        <Navbar />
    </header>
  )
}
