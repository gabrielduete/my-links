import React from "react";
import { HeaderBG , Image, Title } from '../../style/styles'
import Photo from '../../assets/photo.jpeg'

function Header(){
    return (
        <HeaderBG>
                <div>
                    <Image src = {Photo}></Image>
                </div>
                <div>
                    <Title>Gabriel Duete</Title>
                    <span>Front end Developer</span>
                </div>
        </HeaderBG>
    )
}

export default Header