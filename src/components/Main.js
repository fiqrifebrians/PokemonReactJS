import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"

function Main() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=165")
      .then((res) => res.json())
      .then((data) => setPokemon(data.results))
  }, [])

  return (
    <div className="d-flex flex-wrap justify-content-center" style={{ margin:"30px"}}>
      {pokemon.map((pokemon, id) => (
        <Link to={`detail/${id+1}`}>
          <Card style={{ width: "20rem", margin: "1rem",  backgroundColor:'dodgerblue'}}>
            <Card.Img
              variant="top"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id + 1}.png`}
            />
            <Card.Body>
              <Card.Title style={{ textAlign:"center", textTransform:"capitalize", color:"white"}}>
                {pokemon.name}</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default Main
