import React from 'react'

import { BsTwitter, BsGithub, BsWhatsapp } from 'react-icons/bs'
import { FaLinkedin} from 'react-icons/fa'


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div><a href='https://twitter.com/Emmility4real' target="blank">
            <BsTwitter/></a>
        </div>
        <div><a href='https://www.linkedin.com/in/olafisoyeemmanuel/' target="blank">
            <FaLinkedin/></a>
        </div>
        <div><a href='https://github.com/Emmility-king' target="blank">
            <BsGithub/></a>
        </div>
        <div><a href='https://wa.me/qr/MSLTLUNOYKS2M1' target="blank">
            <BsWhatsapp/></a>
        </div>
    </div>
  )
}

export default SocialMedia