import { useEffect, useState } from "react"
import { fetchJson } from "./api"
import { Link } from "react-router-dom"

export default function EpisodeCharacters({ characters }){
    const [charactersData, setCharactersData] = useState([])
    const [showAll, setShowAll] = useState(false)

    async function getCharacters() {
        if (!characters || characters.length === 0) return 

        const result = []

        for (const url of characters) {
            const data = await fetchJson(url)
            result.push(data)
        }
        setCharactersData(result)
    }

    useEffect(() => {
        getCharacters()
    }, [characters])

    const visibleCharacters = showAll ? charactersData : charactersData.slice(0,5)

    return (
        <div>
            <ul>
                {visibleCharacters.map(character => (
                    <Link to={`/character/${character.id}`}>
                    <li key={character.id}> 
                        {character.name}
                    </li>
                    </Link>
                ))}
            </ul>

            <button
                onClick={() => setShowAll(!showAll)}
            >
                {showAll ? "Motrar menos" : "Mostrar más"}
            </button>
        </div>
    )
}