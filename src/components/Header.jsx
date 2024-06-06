import React from 'react'

const style = {
    header: {
        textAlign: 'center',
        color: 'black'
    }
}

export default function Header() {
  return (
    <header style={style.header}>
        <h1>
            Nell's Professional Portfolio
        </h1>
    </header>
  )
}