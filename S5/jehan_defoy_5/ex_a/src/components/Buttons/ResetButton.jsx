import { useContext } from "react"
import Context from "../../contexts/CountersContext"

const ResetButton = () => {
    const {reset} = useContext(Context)
    return(
        <button onClick={reset}>
            Reset scores
        </button>
    )
}

export default ResetButton