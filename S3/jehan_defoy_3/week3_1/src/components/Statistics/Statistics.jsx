import React from "react"
import StatisticLine from "../StatisticLine/StatisticLine"

const Statistics = ({ good,neutral,bad,total }) => {
    if(total === 0){
        return (
            <div>No feedback given</div>
        )
    }
    return (
        <table>
            <tbody>
            <StatisticLine statName="good" value={good} />
            <StatisticLine statName="neutral" value={neutral} />
            <StatisticLine statName="bad" value={bad} />
            <StatisticLine statName="total" value={total} />
            <StatisticLine statName="average" value={(good - bad) / total} />
            <StatisticLine statName="positive" value={good / total * 100} />
            </tbody>
        </table>
    )
  }

export default Statistics