import { useEffect, useState } from "react"
import { fetchJson } from "./api"
import EpisodeListUI from "./episodes/EpisodeListUI"

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

            <EpisodeListUI episodes={episodes} />
        </section>
    )
}