import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchJson } from "../components/api"
import Filter from "../components/FIlter"
import CharacterCard from "../components/CharacterCard"


export default function CharacterList(){
    const [characters, setCharacters] = useState([])
    const [filters, setFilters] = useState({
        name: "",
        status: "",
        species:""
    })
    const [info, setInfo] = useState("")
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("favorites")
        return saved ? JSON.parse(saved) : []
    })
    const [showFavorites, setShowFavorites] = useState(false)


    async function getCharacters(url = 'https://rickandmortyapi.com/api/character/'){
        const data =  await fetchJson(url)

        setCharacters(prev => [...prev, ...data.results])

        if (data.info){
            setInfo(data.info)
        }
    }
    
    useEffect( () => {
        setCharacters([])
        setInfo("")
        getCharacters()
    }, [filters])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    },[favorites])

    const filteredCharacters = characters
        .filter(character => 
            !showFavorites || favorites.includes(character.id))
        .filter(character => 
            character.name.toLowerCase().includes(filters.name.toLowerCase())
            && (filters.status === "" || character.status === filters.status) 
            && character.species.toLowerCase().includes(filters.species.toLowerCase())
        )

    function toggleFavorite(id){
        setFavorites(fav =>
            fav.includes(id) 
                ? fav.filter(favId => favId !== id)
                : [...fav, id]
        )
    }

    return (
        <section>
            <h1 className="text-3xl">Lista de Personajes</h1>

            <Filter 
                filters={filters}
                onChange={setFilters}
            />

            <button
                onClick={() => setShowFavorites(!showFavorites)}
            >
                {showFavorites ? "Ver todos" : "Ver Favoritos"}
            </button>
            
            <div className="flex flex-wrap justify-between">

                { filteredCharacters.length === 0 ? (
                    
                    <p>No hay resultados</p>
                    
                ) : (filteredCharacters.map(character => (
                    <CharacterCard 
                        key={character.id}
                        character={character}
                        isFavorite={favorites.includes(character.id)}
                        onToggleFavorite={toggleFavorite}
                    />
                    ))
                )}
                
            </div>

            {info.next 
                ? <button 
                onClick={() => getCharacters(info.next)}>Cargar más</button>
                :<div>No hay next Page</div>    
            }


        </section>

    )
}