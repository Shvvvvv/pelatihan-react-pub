import React from 'react'
import './App.css'
import { useState } from 'react'
import ListGalaxy from './components/ListGalaxy'



const App = () => {
  const [galaxies, setGalaxies] = useState([
    {
      id: '1',
      name: 'Bima Sakti',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa possimus minima incidunt dolor, voluptatem autem nulla at ea, provident excepturi sapiente illo consectetur alias laborum modi magnam dolorem consequatur reprehenderit!',
      isLike: false,
    },
    {
      id: '2',
      name: 'Andromeda',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa possimus minima incidunt dolor, voluptatem autem nulla at ea, provident excepturi sapiente illo consectetur alias laborum modi magnam dolorem consequatur reprehenderit!',
      isLike: false,
    },
    {
      id: '3',
      name: 'Sombrero',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa possimus minima incidunt dolor, voluptatem autem nulla at ea, provident excepturi sapiente illo consectetur alias laborum modi magnam dolorem consequatur reprehenderit!',
      isLike: false,
    }
  ])
  return (
    <ListGalaxy galaxies={galaxies}/>
  )
}

export default App