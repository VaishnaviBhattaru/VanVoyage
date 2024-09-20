import React from 'react'
import { Link, NavLink} from 'react-router-dom'
// import imgUrl from 'VanLife/src/images/Usercircle.png'

export default function Header(){
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
      }
      function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }
    return(
        <header>
        <Link className="site-logo" to="/"><img src="VanVoyageLogo.png" alt="" /></Link>
        <nav>
          <NavLink to="/host"  style={({isActive}) => isActive ? activeStyle : null }>Host</NavLink>
          <NavLink to="/about" style={({isActive}) => isActive ? activeStyle : null }>About</NavLink>
          <NavLink to="/vans" style={({isActive}) => isActive ? activeStyle : null }>Vans</NavLink>
          <NavLink to="/login" style={({isActive}) => isActive ? activeStyle : null }> Login </NavLink>
           <button onClick={fakeLogOut}>Logout</button>
          
        </nav>
      </header>
    )
}