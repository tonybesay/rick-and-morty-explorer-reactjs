import { useEffect, useState } from "react"
import { fetchJson } from "../api/api"
import EpisodeListUI from "../components/episodes/EpisodeListUI"
import { API_ENDPOINTS } from "../api/endpoints"

export default function EpisodesList(){
    const [episodes, setEpisodes] = useState([])

    useEffect( () => {
        async function getEpisodes(){
            const data = await fetchJson(API_ENDPOINTS.episodes)
            setEpisodes(data.results)
        }

        getEpisodes()
    }, [])


    return (
        <section>
            <h1>Lista de Episodios</h1>
            <EpisodeListUI episodes={episodes} />
        </section>
    )
}