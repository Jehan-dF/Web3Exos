import React, { useState } from 'react'
import GoodButton from '../Buttons/GoodButton'
import OkButton from '../Buttons/OkButton'
import BadButton from '../Buttons/BadButton'
import ResetButton from '../Buttons/ResetButton'

const App = () => {

  return (
    <div>
      <ul>
        <li><GoodButton /></li>
        <li><OkButton /></li>
        <li><BadButton /></li>
        <ResetButton />
      </ul>
    </div>
  )
}

export default App
