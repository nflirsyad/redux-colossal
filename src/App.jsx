import { useState } from 'react'
import CounterComponent from '../node_modules/redux/components/counterComponent';
import UserComponent from '../node_modules/redux/components/userComponent';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterComponent />
      <UserComponent />
    </>
  )
}

export default App
