// eslint-disable-next-line no-unused-vars
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'



export const Header = () => {
  return (
    <>
      <Navbar className="header">
        <Container>
          <div className='content'>
          <Navbar.Brand href="#home">
              <img
              alt="profe lo amo"
              src="/src/assets/File-05.svg"
              width="40"
              height="40" />{' '}
              Rick and Morty Characters
          </Navbar.Brand>
          </div>
        </Container>        
      </Navbar> 
    </>
  ) 
}
