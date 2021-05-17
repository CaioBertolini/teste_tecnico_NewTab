import React, { useEffect, useState } from "react"
import axios from 'axios'
import "./css/cards.css"

export default function Cards(){

    const [pokemon, setPokemon] = useState([]);
    
    useEffect(() =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
            .then(res => {
                const poke = res.data;
                setPokemon(poke.results);
    })}, []);

    return(
        <div className="cards">
            {pokemon.map((item) => {
                return( <div className="cards-poke">
                    {console.log(item.name)}
                    {/* <img src={props.pokemon.sprites["front_default"]} alt={props.pokemonName} /> */}
                    <span>{item.name}</span>
                </div>)
            })}
        </div>
        
    )
}