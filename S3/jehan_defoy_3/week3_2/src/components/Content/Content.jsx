import React from "react";
import Part from "../Part/Part";

const Content = ({content}) => {
    return(
        <div>
            {content.map(part =>
                <Part name={part.name} exercices={part.exercises}/>
            )}
        </div>
    )
}

export default Content