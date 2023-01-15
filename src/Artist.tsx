import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { iiif_url_end, TopicRes } from "./Topic"

const Artist = () => {
    let { artist } = useParams()
    const [data, setData] = useState<TopicRes>()

    useEffect(() => {
        fetch("https://api.artic.edu/api/v1/artworks/search?fields=id,title,artist_title,artist_id,image_id&query[term][artist_id]=" + artist).then(res => res.json()).then(data => setData(data))
    }, [])

    if (!data)
        return (
            <div>loading...</div>
        )
    
    return (
        <section>
        {data.data.map(({ artist_title, image_id, title, id, artist_id }) => (
            <article key={id}>
                <img src={data.config.iiif_url + "/" + image_id + iiif_url_end} />
                <h2>
                    {title} - {artist_title}
                </h2>
            </article>
        ))}
    </section>
    )
}

export default Artist