import React from "react"
import TopAppBar from "./Components/Funtoon/Navbar"
import "./App.css"
import Header from "./Components/Funtoon/Header"
import FeaturedMovies from "./Components/Funtoon/FeaturedMovies"

const FuntoonApp = ()=>{
    return(
       <div>
       <TopAppBar />
       <Header />
       <FeaturedMovies />
       </div>
    )
}


export default FuntoonApp