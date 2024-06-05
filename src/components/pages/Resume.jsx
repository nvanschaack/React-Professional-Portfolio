import React from 'react'
import pdf from '../../assets/resume.pdf'

export default function Resume() {
  return (
    <>
      <p>
        If you'd like to check out my resume, click here
      </p>
      <a href={pdf} download>
        <button>download resume</button>
      </a>
    </>

  )
}
