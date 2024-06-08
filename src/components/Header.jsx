import React from 'react'

const style = {
    header: {
        textAlign: 'center',
        color: 'black',
        padding: '40px',
    }
}

export default function Header() {
  return (
    <header style={style.header}>
        <h1>
           Professional Portfolio
        </h1>
    </header>
  )
}