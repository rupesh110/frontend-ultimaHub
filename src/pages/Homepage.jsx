import React from 'react'
import { useFetchHomeQuery } from '../state/api';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Homepage = () => {
  const [ darkMode, setDarkMode ] = React.useState(false);

  const { data} = useFetchHomeQuery();
   
  
  const toogleDarkMode = () => {
    setDarkMode(!darkMode);
  }
 
  return (
    <div 
      className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'} 
      style={{
        minHeight: '100vh',
        transition: 'all 0.9s ease'
      }}>
      <Container fluid className='p-5 position-relative'>
          <div 
            onClick={toogleDarkMode} 
            style={{ 
              cursor: 'pointer',   
              position: 'absolute',
              top: '30px',
              right: '30px'
            }}>
            {darkMode ? <FaSun size={36}/> : <FaMoon size={36}/>}
          </div>
      </Container>
      <Card style={{
          width: '25rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto'
        }} className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark' }
        >
          <Card.Body>
            <Card.Title >{data}</Card.Title>
          </Card.Body>
      </Card>
      
    </div>
  )
}

export default Homepage
