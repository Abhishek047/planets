import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function GridItem({row, actions, header}) {
  
  const [showAction, setShowAction] = useState(false);
  const history = useHistory();

  function showDetails(url){
    const id = url.split("/").slice(-2).join("/")
    history.push(`/planet/${id}`)
    }
  
  function showFilms(films){
    history.push({
      pathname:'/films',
      state:{films}});
    }

    function showResidents(residents){
      history.push({
      pathname:'/residents',
      state:{residents}});
    }

    return (
      <>
        <tr>
            {header.map((colName) => <td key={colName}>{row[colName]}</td>)}
            {
            showAction ? 
            <td className='gridActions'>
              {row.totalFilms && <button onClick={()=> showFilms(row.films)}>Show Films</button>}
              {row.totalResidents !==0 && <button onClick={()=> showResidents(row.residents)}>Show Residents</button>}
              <button onClick={()=> showDetails(row.url)}>Planet Detail</button>
              {/* {actions.map(({label, action}) => 
              <button key={label} onClick={() => action(row)}>{label}</button>
              )} */}
            </td>
            :  
            <td className='gridActions'>
              <button onClick={()=> setShowAction(!showAction)}>Show Actions</button>
            </td>
            }
        </tr>
      </>
    )
}

export default GridItem
