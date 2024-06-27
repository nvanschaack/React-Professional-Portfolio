import React from 'react'
import pdf from '../../assets/resume.pdf'

export default function Resume() {
  return (
    <div className='m-5'>
      {/* create a list group with react bootstrap for skills*/}
      <p>
        If you'd like to check out my resume, click the button below.
      </p>
      <a href={pdf} download>
        <button>download resume</button>
      </a>
    </div>

  )
}
