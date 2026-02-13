import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Component1} from './Component1.jsx'
import LifecycleDemo from './LifecycleDemo.jsx'
import UpdatingDemo from './UpdatingDemo.jsx'
import Componentnew from './Componentnew.jsx'
import { Compteur, GestionListe,BoiteCouleur } from './atelier1'
import Events from './components/Events.jsx'



function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      
      
   {/* <GestionListe initialItems={['Item 1', 'Item 2']} placeholder="Ajouter un nouvel item" />*/}
    {/* <Compteur initialCount={10} step={2} /> */}
   <Events />
    </>
  )
}

export default App
