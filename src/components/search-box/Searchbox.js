import React from 'react'
import './search-box.css'

const Searchbox = ({placeholder, handleChange}) => {
     
     
     
   return(

     
          <input className='search' onChange={handleChange} type="search" placeholder={placeholder}/>
   )
     

}

export default Searchbox 