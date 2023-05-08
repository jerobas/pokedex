import React from 'react'
import { FooterContainer, FooterText } from './Footer.styles'
import { AiFillHeart } from 'react-icons/ai'

export default function Footer() {
    return (
        <FooterContainer>
            <FooterText>
                Developed with < AiFillHeart color="red" /> by <a href="https://github.com/flaviozno" target='blank'>flaviozno</a>!
                <br />
                Copyright © 2023.
            </FooterText>
        </FooterContainer>
    )
}
