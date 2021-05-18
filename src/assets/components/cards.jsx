import React, { useEffect, useState } from "react"
import axios from 'axios'
import "./css/cards.css"

export default function Cards(props){

    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [imgPokemon, setImgPokemon] = useState([]);
    
    useEffect(() =>{
        function getImg(url){
            axios.get(url).then(res => {
                const imgData = res.data;
                setImgPokemon(imgPokemon => [...imgPokemon, imgData.sprites["front_default"]].sort())
            })
        }
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=0/`)
            .then(res => {
                const poke = res.data;
                setPokemon(poke.results);
                poke.results.map((item)=>{
                    return getImg(item.url);
                });
                setIsLoading(false);
    })}, []);


    if (isLoading){
        return <div className="Loading">Loading page...</div>
    }

    return(
        <div className="cards">
            {}
            {pokemon.map((item,key) => {
                return(<div className="cards-poke">
                    <img src={imgPokemon[key]} alt={item.name} />
                    <span>{item.name}</span>
                </div>)
            })}
        </div>
        
    )
}