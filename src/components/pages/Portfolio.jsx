import React from 'react'
import Project from '../Project'
import projectData from '../../assets/projectData.json'

export default function Portfolio() {
  return (
    <div className='d-flex flex-wrap justify-content-center'>
      {projectData.map((item, i) => (
        <Project key={i} data={item} />
      ))}

    </div>
  )
}
