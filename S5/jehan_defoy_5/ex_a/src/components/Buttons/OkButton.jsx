import { useContext } from "react"
import Context from "../../contexts/CountersContext"

const OkButton = () => {
    const {ok, increaseOk} = useContext(Context)
    return(
        <div>
            Ok : {ok}
            <button onClick={increaseOk}>
                increase ok
            </button>
        </div>
    )
}

export default OkButton