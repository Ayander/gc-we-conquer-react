import React from 'react'
import Header from "./components/Header"
import ExtWeb from './components/ExtWeb'
import './App.css'
import Routing from './Routing'


function App() {
  return (
    <>
   <main>
    <Header/>
    <ExtWeb/>
   </main>
    <Routing/>
   </>
  )
}

export default App
