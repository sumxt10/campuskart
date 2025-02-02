import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import College from '../components/College'
import NewsFeedback from '../components/NewsFeedback'
import Footer from '../components/Footer'

function HeroPage() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <College></College>
      <NewsFeedback></NewsFeedback>
      <Footer></Footer>
    </div>
  )
}

export default HeroPage
