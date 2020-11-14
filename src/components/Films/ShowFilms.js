import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useLocation} from 'react-router-dom'
import './Films.css'

function ShowFilms() {
    const loaction = useLocation()
    const filmsURL = (loaction.state.films);
    const [films, setFilms] = useState(null);
    
    useEffect(()=>{
        axios.all(filmsURL.map(url => axios.get(url)))
        .then(axios.spread(function (...res){
            const reqData = res.map((data) => data.data);
            setFilms(reqData);
        }))
    },[])
    const header = [
        'title',
        'opening_crawl',
        'director',
        'producer',
        'release_date'
    ]

    return (
        <div className='body'>
            {
                films ?
                 (
                    <table className='gridTable'>
                        <thead>
                        <tr className='head'>
                            {header.map(colName => <th key={colName}>{colName}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                            {
                                films.map((film,i) => (
                                <tr className='item' key={i}>
                                    {header.map(colName => <td key={colName}>{film[colName]}</td>)}
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>    
                    //  {/* films.map(film => <div className='item-container' key={film.title}>
                    //  <div className='item'><strong>Name</strong> : {film.title}</div>
                    // </div>)  */}
                 )
                : <div className='loading'>Loading</div> 
            }
        </div>
    )
}

export default ShowFilms
