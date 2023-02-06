import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const Footer = () => (
  <footer style={{ backgroundColor: 'black', color: 'white', display: 'flex', alignItems: 'center', textAlign:'center', justifyContent: 'center' }}>
    <Container>
    <Image style={{ width:'125px', height:'40px', margin:'20px'}} src={'./pokemonLogo.png'}/>
      <Row>
        <Col>
          <a href="https://pokeapi.co/docs/v2" target="_blank" style={{ color: 'white' }}>
            PokeAPI
          </a><a style={{marginLeft:'20px'}}></a>
          <a href="https://github.com/PokeAPI/sprites" target="_blank" style={{ color: 'white' }}>
            Sprites
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Copyright © 2023</p>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer



