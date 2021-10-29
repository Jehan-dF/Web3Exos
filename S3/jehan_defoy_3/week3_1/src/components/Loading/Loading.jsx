import React, {useState} from "react";
import App from "../App/App";

const Loading = () => {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {setLoading(false)},3000)
    
    if(loading){
        return (
            <h1>LOADING...</h1>
        )
    }
    return (
        <App />
    )
}

export default Loading