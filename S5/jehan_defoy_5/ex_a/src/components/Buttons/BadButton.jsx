import { useContext } from "react"
import Context from "../../contexts/CountersContext"

const BadButton = () => {
    const {bad, increaseBad} = useContext(Context)
    return(
        <div>
            Bad : {bad}
            <button onClick={increaseBad}>
                increase bad
            </button>
        </div>
    )
}

export default BadButton