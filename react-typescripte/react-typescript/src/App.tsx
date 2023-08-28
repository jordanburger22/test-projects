import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import MensInventory from './components/MensInventory'
import { Product } from './components/types'

function App() {

  

  const [inventory, setInventory] = useState<Product[]>([])

 

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setInventory(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='container'>
      <MensInventory inventory = {inventory}/>
    </div>
  )
}

export default App
