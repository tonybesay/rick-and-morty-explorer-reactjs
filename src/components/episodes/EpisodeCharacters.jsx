import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchJson } from "../../api/api"

export default function EpisodeCharacters({ characters }){
    const [charactersData, setCharactersData] = useState([])
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
    async function getCharacters() {
        if (!characters || characters.length === 0) return 

        const result = await Promise.all(characters.map(url => fetchJson(url)))
        setCharactersData(result)
    }

        getCharacters()
    }, [characters])

    if (charactersData.length === 0) return <p>Cargando personajes...</p>

    return (
        <section>
            <div className={`overflow-hidden transition-[max-height] duration-500 ease-linear ${showAll ? "max-h-250" : "max-h-40"}`}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {charactersData.map(character => (
                        <div key={character.id} 
                            className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 justify-center text-center text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition">
                            <Link to={`/character/${character.id}`} className="font-medium text-gray-800 hover:text-blue-600">
                                {character.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-2">
                <button
                    className={`px-3 py-1 text-sm font-medium rounded-lg transition-all hover:scale-105 active:scale-95 ${
                        showAll
                            ? "bg-linear-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white"
                            : "bg-linear-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700"
                    }`}
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "Mostrar menos" : "Mostrar más"}
                </button>
            </div>
        </section>
    )
}