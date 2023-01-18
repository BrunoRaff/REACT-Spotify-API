import { useState } from 'react'
import Header from './common/Header.jsx';
import { AuthPage } from './auth/pages/AuthPage.jsx'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthPage></AuthPage>
    </>
  )
}

export default App
