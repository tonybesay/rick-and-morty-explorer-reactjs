import EpisodesCard from "./EpisodesCard"

export default function EpisodeListUI({ episodes }) {
    if (episodes.length === 0) {
        return <p>Cargargo episodios</p>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {episodes.map(episode => (
                <EpisodesCard 
                    key={episode.id}
                    episode={episode}
                />
            ))}
        </div>
    )
}