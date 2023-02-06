import React from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
  let { id } = useParams()

  const fetchPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon = await response.json()

    const name = pokemon.name
    const types = pokemon.types.map(type => type.type.name).join(', ')
    const weight = pokemon.weight
    const height = pokemon.height
    const abilities = pokemon.abilities.map(ability => ability.ability.name).join(', ')
    const moves = pokemon.moves.map(move => move.move.name).join(', ')
    const stats = pokemon.stats.map(stat => stat.stat.name + ': ' + stat.base_stat).join(', ')
    const image = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${id}.png?raw=true`

    return (
      <div>
        <img src={image} alt={name} />
        <p>Name: {name}</p>
        <p>Type: {types}</p>
        <p>Weight: {weight}</p>
        <p>Height: {height}</p>
        <p>Abilities: {abilities}</p>
        <p>Moves: {moves}</p>
        <p>Stats: {stats}</p>
      </div>
    )
  }

  return (
    <div>
      {fetchPokemon()}
    </div>
  )
}

export default Detail

