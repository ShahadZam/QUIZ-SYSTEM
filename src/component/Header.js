import { Link } from 'react-router-dom'
import React from 'react'

function Header() {
  return (
    <div className='header'>
        <Link to='/' className='title'>Quiz system</Link>
        <hr className='devided'/>
    </div>
  )
}

export default Header