import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { fetchJson } from "../api/api"
import { API_ENDPOINTS } from "../api/endpoints"


export default function CharacterDetail() {
    const { id } = useParams()
    const [character, setCharacter] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchCharacter() {
            setIsLoading(true)

            const data = await fetchJson(`${API_ENDPOINTS.characters}/${id}`)
            setCharacter(data)

            setIsLoading(false)
        }

        fetchCharacter()
    }, [id])

    // if (!character) return <p className="text-center text-gray-500 mt-10">Cargando...</p>
    if (isLoading) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-6 animate-pulse">
            {/* Title */}
            <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-6"></div>

            {/* Image */}
            <div className="h-72 bg-gray-200 rounded-xl mb-6"></div>

            {/* Info lines */}
            <div className="space-y-3 max-w-md mx-auto">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
            </div>
            </div>
        )
        }

    return (
        <section className="max-w-4xl mx-auto px-4 py-6">
            
            <button 
                onClick={() => navigate(-1)} 
                className="text-gray-600 hover:text-gray-900 mb-4 block"
            >
                ⬅️ Volver
            </button>

            <h1 className="text-4xl font-bold mb-6 text-center">{character.name}</h1>
            <img className="mx-auto rounded-md shadow-lg mb-6" src={character.image} alt={character.name} />
            <div className="text-lg text-gray-700 space-y-2 max-w-md mx-auto">
                <p><span className="font-semibold">Estado:</span> {character.status}</p>
                <p><span className="font-semibold">Especie:</span>  {character.species}</p>
                <p><span className="font-semibold">Tipo:</span>  {character.type || "Desconocido"}</p>
                <p><span className="font-semibold">Origen:</span>  {character?.origin?.name}</p>
                <p><span className="font-semibold">Ubicación:</span>  {character?.location?.name}</p> 
            </div>

        </section>
    )
} 