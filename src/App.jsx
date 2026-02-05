import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Component1} from './Component1.jsx'
import LifecycleDemo from './LifecycleDemo.jsx'
import UpdatingDemo from './UpdatingDemo.jsx'
import Componentnew from './Componentnew.jsx'
import { Compteur, GestionListe,BoiteCouleur } from './atelier1'



function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      
      
   {/* <GestionListe initialItems={['Item 1', 'Item 2']} placeholder="Ajouter un nouvel item" />*/}
    {/* <Compteur initialCount={10} step={2} /> */}
    <BoiteCouleur initialColor="#ff0000" colorOptions={['#ff0000', '#00ff00', '#0000ff', '#ffff00']} />
    </>
  )
}

export default App
