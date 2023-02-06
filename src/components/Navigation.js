import React from 'react'
import { Navbar, Nav, Container, Image} from 'react-bootstrap'

const Navigation = () => {
    return (
      <div>
      <Navbar bg="warning" variant="dark" style={{ padding: '1rem 0', fontWeight: 'bold' }}>
        <Container>
          <Nav.Link href='/' className="d-flex w-100 justify-content-center" style={{fontSize:'30px'}}><Image style={{ width:'210px', height:'80px'}} src={'./pokemonLogo.png'}/></Nav.Link>
        </Container>
      </Navbar>
      </div>
    )
}

export default Navigation