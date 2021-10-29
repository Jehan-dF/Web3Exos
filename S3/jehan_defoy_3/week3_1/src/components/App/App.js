import React, { useState } from 'react'
import Button from '../Button/Button'
import Statistics from '../Statistics/Statistics'

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const changeGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }
  const changeNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }
  const changeBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button
          handleClick={changeGood}
          text='good'
        />
        <Button
          handleClick={changeNeutral}
          text='neutral'
        />
        <Button
          handleClick={changeBad}
          text='bad'
        />
      </div>
      <h1>statistics</h1>
      <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
        />
    </div>
  )
}

export default App
