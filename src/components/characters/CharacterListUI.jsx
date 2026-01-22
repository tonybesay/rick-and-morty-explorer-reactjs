import CharacterCard from "./CharacterCard"

export default function CharacterListUI({ characters, favorites, toggleFavorite, isLoading }) {
    // LOADING STATE (SKELETON)
    if (isLoading) {
        return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
            <div
                key={index}
                className="h-72 bg-gray-200 rounded-xl animate-pulse"
            />
            ))}
        </div>
        )
    }
    // ✅ ESTADO VACÍO
    if (characters.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-lg font-semibold text-gray-700">No hay resultados</p>
                <p className="text-sm text-gray-500 mt-2">No se encontraron personajes que coincidan con los filtros aplicados.</p>
            </div>
        )
    }

    // ✅ LISTADO NORMAL
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map(character => (
                <CharacterCard
                    key={character.id}
                    character={character}
                    isFavorite={favorites.includes(character.id)}
                    onToggleFavorite={() => toggleFavorite(character.id)}
                />
            ))}
        </div>
    )
}