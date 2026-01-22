import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { fetchJson } from "../api/api"
import { API_ENDPOINTS } from "../api/endpoints"


export default function CharacterDetail() {
    const { id } = useParams()
    const [character, setCharacter] = useState(null)
    const navigate = useNavigate()

    useEffect( ()=> {
        async function getCharacter() {
            const data = await fetchJson(`${API_ENDPOINTS.characters}/${id}`)
            setCharacter(data)
        }
    
        getCharacter()
    }, [id])

    if (!character) return <p className="text-center text-gray-500 mt-10">Cargando...</p>

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