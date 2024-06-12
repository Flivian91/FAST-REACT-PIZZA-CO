import React from 'react'
import { Link } from 'react-router-dom'

function LinkButton({children, link}) {
  return (
    <Link className='text-base  text-blue-600 hover:text-blue-500' to={link}>&larr; {children}</Link>
  )
}

export default LinkButton