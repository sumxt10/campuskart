import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import College from '../components/College/College'
import NewsFeedback from '../components/NewsFeedback/NewsFeedback'
import Footer from '../components/Footer/Footer'

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
