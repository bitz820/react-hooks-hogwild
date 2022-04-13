import React, {useState} from 'react'
import HogDetails from './HogDetails'

function HogTile({ hogData }) {
    const [details, setDetails] = useState(false)
    // state here to determine toggle of info!
    const { name, image } = hogData

    const toggleDetails = () => {
        setDetails(details => !details)
    }
    
    const showDetails = details ? <HogDetails hogData={hogData} /> : null

    return (
        <div className='pigTile' onClick={toggleDetails} >
            <h1>{name}</h1>
            <img src={image} alt={name}/>
            {showDetails}
        </div>
    )
}

export default HogTile