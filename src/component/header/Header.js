import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {


    return (
        <div className="header">
            <div className="headerLeft">
               
                <div className="logo">ABHMovies</div>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <Link to="/movies/search" style={{textDecoration: "none"}}><span>Search</span></Link>
               
               
                
			</div>
            </div>
            
        
    )
}

export default Header