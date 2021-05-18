import React , { useEffect, useState } from "react"
import axios from 'axios'
import pokedexlogo from "./img/pokedexlogo.png"
import searchlogo from "./img/magnifyingglass.svg"
import "./css/header.css"

export default function Header(){

    const [typePokemon, setTypePokemon] = useState([]);

    useEffect(() =>{
        axios.get(`https://pokeapi.co/api/v2/type`)
            .then(res => {
                const typePoke = res.data;
                setTypePokemon(typePoke.results);
    })}, []);

    return(
        <div className="header-top">
            <img src={pokedexlogo} alt="logo pokedex" fill="#ee6b2f"/>
            <div className="search-menu">
                <select defaultValue={0}>
                    <option value={0}>-- Tipo de pokémon --</option>
                    {typePokemon.map((item,key) => {
                        return <option value={key+1}>{item.name}</option>
                    })}
                </select>
                <input type="text" placeholder="Digite o nome do pokémon"/>
                <button>
                    <img src={searchlogo} alt="logo procura" />
                </button>
            </div>
        </div>
    )
}