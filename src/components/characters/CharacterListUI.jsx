import CharacterCard from "../CharacterCard"

export default function CharacterListUi({ characters, favorites, toggleFavorite }){
    if (characters.length === 0) {
        return <p className="text-center text-gray-600 mt-10">No hay resultados</p>
    }
    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {characters.map(character => (
                    <CharacterCard 
                        key={character.id} 
                        character={character} 
                        isFavorite={favorites.includes(character.id)}
                        toggleFavorite={toggleFavorite}
                    />
                ))}
            </div>
        </div>

    )
}