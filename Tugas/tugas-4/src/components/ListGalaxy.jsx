import React from 'react'
import Galaxy from './Galaxy'

const ListGalaxy = (props) => {
    console.log(props.galaxies);
  return (
    <ul>
        {
            props.galaxies.map((galaxy) => {
                return <Galaxy key={galaxy.id} name={galaxy.name} detail={galaxy.description} />
            })
        }
    </ul>
  )
}

export default ListGalaxy