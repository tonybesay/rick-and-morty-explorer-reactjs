import EpisodesCard from "./EpisodesCard"

export default function EpisodeListUI({ episodes, isLoading }) {
    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="h-64 bg-gray-200 rounded-xl animate-pulse"/>
            ))}
            </div>
        )
    }

    if (episodes.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-lg font-semibold text-gray-700">No hay episodios</p>
                <p className="text-sm text-gray-500 mt-2">No se pudieron cargar los episodios.</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {episodes.map(episode => (
                <EpisodesCard key={episode.id} episode={episode}/>
            ))}
        </div>
    )
}