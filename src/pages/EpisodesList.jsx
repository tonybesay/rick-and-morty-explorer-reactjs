import { useEffect, useState } from "react"
import { fetchJson } from "../api/api"
import EpisodeListUI from "../components/episodes/EpisodeListUI"
import { API_ENDPOINTS } from "../api/endpoints"

export default function EpisodesList(){
    const [episodes, setEpisodes] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
    async function fetchEpisodes() {
        setIsLoading(true)

        const data = await fetchJson(API_ENDPOINTS.episodes)
        setEpisodes(data.results)

        setIsLoading(false)
    }

    fetchEpisodes()
    }, [])

    return (
        <section>
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">Episodios</h1>
            <div className="mt-6">
                <EpisodeListUI 
                    episodes={episodes}
                    isLoading={isLoading}
                />
            </div>
        </section>
    )
}