import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const nama = 'Ronaldinho';
const arrayNama = ['Messi', 'Ronaldo', 'Mbappe', 'Neymar']

const Pertama = () => {
  let hitung = 0;
  return (
    <>
        <button onClick={() => setCount(value => value + 1)}>Menghitung {count}</button>
    {
        arrayNama.map((nama) => {
            return (
                <button key={nama}>Menghitung {count}</button>
            )
        })
    }            
    </>
  )
}

export default Pertama