import React from 'react'
import { Navbar, Explore, Footer } from "../components"
import { Celebration, Count, Partnerus, Subscribe, Sliderr, Herocarousel, Mycarousel } from "../containers"
import "./pages.css"

const Home = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Mycarousel />
        <Sliderr />
        <Explore />
        <Celebration />
        <Partnerus />
        <Count />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Home