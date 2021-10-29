import { useContext } from "react"
import Context from "../../contexts/CountersContext"

const GoodButton = () => {
    const {good, increaseGood} = useContext(Context)
    return(
        <div>
            Good : {good}
            <button onClick={increaseGood}>
                increase good 
            </button>
        </div>
    )

}

export default GoodButton