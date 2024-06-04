import React from 'react'

const styles = {
    footer: {
        fontSize: '2px',
        color: 'black',
        font: 'Awesome',
    }
}

export default function Footer() {
    return (
        <footer style={styles.footer}>
            {/* GitHub icon links to my gitHub */}
            <a href="https://github.com/nvanschaack">
                <i className="fab fa-github">GitHub</i>
            </a>
      
            {/* LinkedIn icon links to my LinkedIn */}
        </footer>
    )
}
