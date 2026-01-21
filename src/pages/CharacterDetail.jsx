import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchJson } from "../components/api"

export const CHARACTERS_URL = 'https://rickandmortyapi.com/api/character/'


export default function CharacterDetail() {
    const { id } = useParams()
    const [character, setCharacter] = useState(null)
    console.log(character)

    async function getCharacter() {
        const data = await fetchJson(`${CHARACTERS_URL}/${id}`)
        setCharacter(data)
    }
    
    useEffect( ()=> {
        getCharacter()
    },[])

    if (!character) return <p>Cargando...</p>

    return (
        <section>

            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            <p>Estado: {character.status}</p>
            <p>Especie: {character.species}</p>
            <p>Tipo: {character.type || "Desconocido"}</p>
            <p>Origen: {character?.origin?.name}</p>
            <p>Ubicación: {character?.location?.name}</p> 

        </section>
    )
} 