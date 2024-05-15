import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Contact = () => {
    const location = useLocation();
  return (
    <div>Contact{location.state}</div>
  )
}
export default Contact