import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Choice = () => {
    const [topic, setTopic] = useState("")
    const navigate = useNavigate()

    return (
        <form onSubmit={(e) => {
            navigate("/topic/" + topic + "/1")
            e.preventDefault()
        }}>
            <label>
                <h1>Topic</h1>
                <p>Type a topic below to begin. Then hit submit.</p>
                <input value={topic} onChange={(e) => setTopic(e.currentTarget.value.toLowerCase())} />
            </label>
            <br />
            <input className="buttonClass" type="submit" value="Submit" />
        </form>
    )
}

export default Choice