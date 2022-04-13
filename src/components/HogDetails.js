import React from 'react'

function HogDetails({hogData}) {

    const {greased, specialty, weight, medal } = hogData
  return (
    <div>
        <h2>Specialty: {specialty}</h2>
        <h3>Highest Medal Achieved: {medal}</h3>
        <h4>{greased ? "Piggy is GREASED" : "Dry as a BONE"}</h4>
        <small>Weight: {weight} lbs</small>
    </div>
  )
}

export default HogDetails