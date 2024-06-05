import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const style = {
    iconSize: {
        fontSize: '45px'
    }
}

export default function Footer() {
    return (
        <footer>
            <a href="https://github.com/nvanschaack" style={style.iconSize}>
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nell-van-schaack/" style={style.iconSize}>
                <FaLinkedin />
            </a>
        </footer>
    )
}
