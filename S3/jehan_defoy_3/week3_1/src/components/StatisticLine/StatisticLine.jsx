import React from "react";

const StatisticLine = ({statName,value}) => {
    let auxString = "";
    if(statName === "positive")
        auxString = "%"

    return (
        <tr>
            <td>{statName} </td>
            <td>{value} {auxString} </td>
        </tr>
    )
}

export default StatisticLine