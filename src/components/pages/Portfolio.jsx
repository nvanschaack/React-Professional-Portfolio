import React from 'react'
import Project from '../Project'
import projectData from '../../assets/projectData.json'


// const projectData = [
//   {
//     projectName: 'project one', 
//     projectDescription: 'sdfafsd asdf asdf asdf'
//   },
//   {
//     projectName: 'project two', 
//     projectDescription: ''
//   },
//   {
//     projectName: 'project three', 
//     projectDescription: ''
//   },
// ]

export default function Portfolio() {
  return (
    <div className='d-flex flex-wrap justify-content-center'>
      {projectData.map((item, i) => (
        <Project key={i} data={item} />
      ))}

    </div>
  )
}
