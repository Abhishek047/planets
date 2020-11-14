import './Planets.css';
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getItems} from '../../actions'
import Grid from '../Grid';

function Planets() {
  const dispatch = useDispatch();
  const header = useSelector(state => state.header);
  const planets = useSelector(state => state.data.planets);
  const [values, setValues] = useState(null);
  
//ADD CUSTOM DATA HERE
  
function customizeValues(){
  const newVal = planets.map((item) => {
    const numberOfFilms = item.films.length;
    const numberOfResidents = item.residents.length;
    return({
      ...item, 
      totalFilms: numberOfFilms,
      totalResidents: numberOfResidents
    }
    )
  });
  return(newVal);
}

useEffect(()=>{
  dispatch(getItems());
  // eslint-disable-next-line 
},[]);

useEffect(()=>{
  if(planets.length > 0)
    {
      const newVal = customizeValues();
      setValues(newVal);
    }
    // eslint-disable-next-line 
},[planets]);


//ADD NEW CUSTOM DATA HEADERS HERE
  const data = {
    header:[...header,'totalFilms','totalResidents'],
    values,
    actions: [
      {
        label: 'Go to Films',
        action: (row) => { console.log(`redirect to grid with ${row.films.length} Films`)}
      },
      {
        label: 'Go to Residents',
        action: (row) => { console.log(`redirect to grid with ${row.residents.length} Residents`)}
      }
    ]
  }

  return (
    <div className='App'>
      <Grid data={data}/>
    </div>
  );
}

export default Planets;
