// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Header.css'
import { FaHome, FaUserSecret  } from "react-icons/fa";
import logoNasa from  '../../assets/imagen_nasa.jpeg'

export const Header = () => {
  return (
    <div className='container'>
        <FaHome className='icon_home' />
        <img src={logoNasa} />
        <FaUserSecret className='icon_user' />
    </div>
  )
}   
