import React from 'react'
import Button from '../Button/Button'
import { WrapperButtonsBG } from '../../style/styles'
import { BsLinkedin, 
    BsYoutube, 
    BsGithub, 
    BsInstagram, 
    BsTwitter,
    BsTwitch,
    BsSpotify,
} from "react-icons/bs"
import { FaDev } from "react-icons/fa"
import { MdOutgoingMail } from 'react-icons/md'

function WrapperButtons(){
    return (
        <WrapperButtonsBG>
            <Button 
                name = 'Linkedin'
                icon = {BsLinkedin}
                href = {'https://www.linkedin.com/in/gabrielduete/'}
            />

            <Button 
                name = 'Github'
                icon = {BsGithub}
                href = {'https://github.com/gabrielduete'}
            />

            <Button 
                name = 'Instagram'
                icon = {BsInstagram}
                href = {'https://www.instagram.com/gabriel.duete/?utm_medium=copy_link'}
            />

            <Button 
                name = 'Twitter'
                icon = {BsTwitter}
                href = {'https://twitter.com/gabrielduetee'}
            />
            
            <Button 
                name = 'DEV Community'
                icon = {FaDev}
                href = {'https://dev.to/gabrielduete'}
            />

            <Button 
                name = 'Spotify'
                icon = {BsSpotify}
                href = {'https://open.spotify.com/user/2ajl99ce36bqbgwiyytekm2dc'}
            />
           
            <Button 
                name = 'Youtube'
                icon = {BsYoutube}
                href = {'https://www.youtube.com/channel/UC6gDHpv2bxUT4dGU_ihcp0w'}
            />
            
            <Button 
                name = 'Twitch'
                icon = {BsTwitch}
                href = {'https://www.twitch.tv/gabrielduetedev'}
            />

            <Button
                name = 'Send e-mail'
                icon = {MdOutgoingMail}
                href = {'mailto:gabrielmonteiroduete@gmail.com'}
            />
        </WrapperButtonsBG>
    )
}

export default WrapperButtons