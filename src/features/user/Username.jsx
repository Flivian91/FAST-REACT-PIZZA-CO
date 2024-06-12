import React from 'react'
import { useSelector } from 'react-redux'
import { getUsername } from '../cart/cartSlice'

export default function Username() {
  const user = useSelector(getUsername)
  if(!user) return
  return (
    <h3 className='text-sm font-semibold hidden md:block'>
      {user}
    </h3>
  )
}
