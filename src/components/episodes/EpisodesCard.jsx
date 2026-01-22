import EpisodeCharacters from "./EpisodeCharacters"

export default function EpisodesCard({ episode }){
    return (
        <article className="bg-white p-4 rounded-lg shadow-md space-y-4 h-full flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800">{episode.name}</h3>
            <ul className="text-sm text-gray-600 space-y-1">
                <li>Nº {episode.episode}</li>
                <li>Emisión: {episode.air_date}</li>
            </ul>

            <h4 className="text-lg font-medium text-gray-700">Lista de Personajes del episodio:</h4>
            <div className="mt-auto">
                <EpisodeCharacters characters={episode.characters} />
            </div>

        </article>
    )
}