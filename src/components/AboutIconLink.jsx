import React from 'react'
import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
        <Link to="/about"><FaQuestion size={30}/></Link></div>

        /**
         * * Link different ways
         * ! <Link to={{
         * !      pathname:"/about",
         * !      search:"?sort=name"
         * !}}></Link>
         */

      
  )
}

export default AboutIconLink