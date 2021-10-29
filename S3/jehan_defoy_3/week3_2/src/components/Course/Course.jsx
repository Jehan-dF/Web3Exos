import React from "react";
import Header from "../Header/Header";
import Content from "../Content/Content";

const Course = (props) => {
    return(
        <div>
            <Header text={props.course.name}/>
            <Content content={props.course.parts}/>
        </div>
    )
}

export default Course