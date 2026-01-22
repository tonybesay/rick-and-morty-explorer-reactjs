import { useEffect, useState, useCallback } from "react"
import { fetchJson } from "../api/api"
import CharacterFilters from "../components/characters/CharacterFilters"
import FavoriteToggle from "../components/characters/FavoriteToggle"
import CharacterListUi from "../components/characters/CharacterListUI"
import LoadMoreButton from "../components/ui/LoadMoreButton"
import { API_ENDPOINTS } from "../api/endpoints"


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


    const getCharacters = useCallback(async (url = API_ENDPOINTS.characters) => {
        const data = await fetchJson(url)

        setCharacters(prev => [...prev, ...data.results])
        if (data.info) setInfo(data.info)
    }, [])

    useEffect(() => {
        async function fetchInitialCharacters() {
            const data = await fetchJson(API_ENDPOINTS.characters)
            setCharacters(data.results)
            if (data.info) setInfo(data.info)
        }

        fetchInitialCharacters()
    },[])

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

            <CharacterFilters 
                filters={filters}
                onChange={setFilters}
            />

            <FavoriteToggle 
                showFavorites={showFavorites}
                onToggle={() => setShowFavorites(!showFavorites)}
            />
            
            <CharacterListUi 
                characters={filteredCharacters}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
            />

            <LoadMoreButton 
                hasNext={!!info.next}
                onLoadMore={() => getCharacters(info.next)}
            />


        </section>

    )
}