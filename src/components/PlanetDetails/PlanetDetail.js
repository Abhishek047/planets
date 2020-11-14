import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './PlanetDet.css'

function PlanetDetail({match}) {
    const [planet, setPlanet] = useState(null);

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${match.params.id}`)
        .then(res => setPlanet(res.data))
        .catch(err => console.log(err));
    // eslint-disable-next-line
    },[]);
    
    return (
        <div>
            {
                planet ? (<div className='container'>
                            <div className='title'>Planet Details</div>
                            <div className='item'><strong>Name</strong> : {planet.name}</div>
                            <div className='item'><strong>Rotation Period</strong> : {planet.rotation_period}</div>
                            <div className='item'><strong>Orbital Period</strong> : {planet.orbital_period}</div>
                            <div className='item'><strong>Diameter</strong> : {planet.diameter}</div>
                            <div className='item'><strong>Climate</strong> : {planet.climate}</div>
                            <div className='item'><strong>Terrain</strong> : {planet.terrain}</div>
                            <div className='item'><strong>Surfcae Water</strong> : {planet.surface_water}</div>
                            <div className='item'><strong>Population</strong> : {planet.population}</div>
                            <div className='item'><strong>Types of Residents</strong> : {planet.residents.length}</div>
                            <div className='item'><strong>Total Films</strong> : {planet.films.length}</div>
                        </div>) 
                    : (<div className='container loading'>Loading...</div>) 
            }
        </div>
    )
}

export default PlanetDetail
