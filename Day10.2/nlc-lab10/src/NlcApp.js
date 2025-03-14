import React from 'react'
import NlcUseState from "./Components/NlcUseState"
import NlcUseEffect from "./Components/NlcUseEffect"

export default function NlcApp() {
  return (
    <div className='container border border my-2'>
      <h1>Demo React Hook</h1>
      <NlcUseState />
      <NlcUseEffect />
    </div>
  )
}