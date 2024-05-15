import React from 'react'
import {useLocation } from 'react-router-dom'

const Project = () => {
    const location = useLocation();
  return (
    <div>Project{location.state}</div>
  )
}
export default Project