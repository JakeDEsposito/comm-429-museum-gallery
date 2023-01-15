import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Warning: Incomplete Type, Lacks Some Data! (Using only what is nessisary for this project)
export type TopicRes = {
    config: {
        iiif_url: string
    }
    data: {
        artist_title: string
        id: number
        image_id: string
        title: string
        artist_id: number
    }[]
}
export const iiif_url_end = "/full/843,/0/default.jpg"

const Topic = () => {
    let { topic } = useParams()
    const [data, setData] = useState<TopicRes>()

    useEffect(() => {
        fetch("https://api.artic.edu/api/v1/artworks/search?fields=id,title,artist_title,artist_id,image_id&query[term][is_public_domain]=true&q=" + topic).then(res => res.json()).then(data => setData(data))
    }, [])

    if (!data)
        return (
            <div>loading...</div>
        )

    // TODO: Add link to artist
    return (
        <section>
            {data.data.map(({ artist_title, image_id, title, id, artist_id }) => (
                <article key={id}>
                    <img src={data.config.iiif_url + "/" + image_id + iiif_url_end} />
                    <h2>{title} - <Link to={`/artist/${artist_id}`}>{artist_title}</Link></h2>
                </article>
            ))}
        </section>
    )
}

export default Topic