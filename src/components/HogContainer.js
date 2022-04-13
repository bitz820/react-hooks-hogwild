import React from 'react'
import HogTile from './HogTile'

function HogContainer({hogs}) {
  
    const renderTiles = hogs.map(hog => <HogTile key={hog.name} hogData={hog} />)

  return (
    <div className="ui grid container" >{renderTiles}</div>
  )
}

export default HogContainer