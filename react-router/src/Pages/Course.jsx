import React from 'react';
import { useParams } from 'react-router-dom';

const Course = () => {
    const params = useParams();
   return (
    <div>Course  {params.coursename}</div>
  )
}
export default Course ;