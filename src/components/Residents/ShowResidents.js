import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useLocation} from 'react-router-dom'
import './Resident.css'

function ShowResidents() {
    const loaction = useLocation()
    const residentsURL = (loaction.state.residents);
    const [residents, setResidents] = useState(null);
   
    useEffect(()=>{
        axios.all(residentsURL.map(url => axios.get(url)))
        .then(axios.spread(function (...res){
            const reqData = res.map((data) => data.data);
            setResidents(reqData);
        }))
        // eslint-disable-next-line
    },[])
   
    const header = [
        'name',
        'height',
        'mass',
        'hair_color',
        'gender',
        'eye_color',
        'skin_color'
    ]

    return (
        <div className='res-body' > 
            {
                residents ? 
                (
                    <table className='gridTable'>
                        <thead>
                        <tr className='res-head'>
                            {header.map(colName => <th key={colName}>{colName}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                            {
                                residents.map((resident,i) => (
                                <tr className='res-item' key={i}>
                                    {header.map(colName => <td key={colName}>{resident[colName]}</td>)}
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )    
                    : <div className='res-loading'>Loading</div> 
 
            }
        </div>
    )
}

export default ShowResidents