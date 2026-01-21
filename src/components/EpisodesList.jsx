import { useEffect, useState } from "react"
import { fetchJson } from "./api"
import EpisodeCharacters from "./EpisodeCharacters"

export default function EpisodesList(){
    const [episodes, setEpisodes] = useState([])

    async function getEpisodes(){
        const data = await fetchJson("https://rickandmortyapi.com/api/episode")
        setEpisodes(data.results)
    }

    useEffect( () => {
        getEpisodes()
    }, [])


    return (
        <section>
            <h1>Lista de Episodios</h1>

            <div className="flex flex-wrap gap-6">

                {episodes.map((episode) => (

                    <article className="border p-2 rounded"
                        key={episode.id}>

                        <h3>{episode.name}</h3>

                        <ul>
                            <li>Nº {episode.episode}</li>
                            <li>Emisión: {episode.air_date}</li>
                        </ul>

                        <h4>Lista de Personajes del episodio:</h4>
                        <EpisodeCharacters characters={episode.characters} />

                    </article>
                ))}

            </div>
        </section>
    )
}