import React from 'react'
import { useState } from 'react'
import { useImmer} from 'use-immer'
import './App.css'

const App = () => {
  // useState
  const [person, setPerson] = useState({
    name: 'Budi',
    nim: '1234567',
    prodi: 'D3MI',
    address: {
      city: 'Banjar',
      village: 'Pataruman'
    }
  });

  // useImmer 
  const [personImmer, updatePersonImmer] = useImmer({
    name: 'Budi',
    nim: '1234567',
    prodi: 'D3MI',
    address: {
      city: 'Banjar',
      village: 'Pataruman'
    }
  })

  // person.address.city = 'Bandung'

  // const object = {
  //   name: 'Budi',
  //   nim: '1234567',
  //   prodi: 'D3MI',
  //   alamat: 'Banjar',
  // }

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name] : e.target.value
    })
  }

  const handleChangeImmer = (e) => {
    updatePersonImmer((draft) => {
      draft[e.target.name] = e.target.value
    })
  }

  const handleChangeImmerCity = (e) => {
    updatePersonImmer((draft) => {
      draft.address[e.target.name] = e.target.value;
    })
  }

  // objek bersarang
  const handleChangeCity = (e) => {
    setPerson({
      ...person,
      address: {
        ...person.address,
        [e.targe.name]: e.target.value
      },
    })
  }

  

  return (
    <>
      <p>Input Name</p>
      <input type="text" name='name' value={personImmer.name} onChange={handleChangeImmer} />
      <p>Input NIM</p>
      <input type="text" name='nim' value={personImmer.nim} onChange={handleChangeImmer} />
      <p>Input City</p>
      <input type="text" name='city ' value={personImmer.address.city} onChange={handleChangeImmerCity} />
      <div>{ personImmer.name }</div>
      <div>{personImmer.nim}</div>
      <div>{personImmer.address.city}</div>
    </>
  )
}

export default App