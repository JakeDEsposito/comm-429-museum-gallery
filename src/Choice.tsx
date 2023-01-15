import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Choice = () => {
    const [topic, setTopic] = useState("")
    const navigate = useNavigate()

    return (
        <form onSubmit={(e) => {
            navigate("/topic/" + topic)
            e.preventDefault()
        }}>
            <label>
                Topic
                <input value={topic} onChange={(e) => setTopic(e.currentTarget.value)} />
            </label>
        </form>
    )
}

export default Choice