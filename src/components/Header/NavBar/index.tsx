import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from './styles'
const NavBar: React.FC = () => {
  const history = useHistory()
  return (
    <Container className='navBar'>
      <div className='topNavBar'>
        <div className='dropdown'>
          <button className='dropbtn'>Menu</button>
          <div className='dropdown-content'>
            <span onClick={() => history.push('/favorites')}>
              Meus Favoritos
            </span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default NavBar
