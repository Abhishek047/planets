import React, {useState} from 'react'
import './Modal.css'


function Modal({setOpen}) {
    const [name,setName] = useState('');
    const [rotation, setRotation] = useState('');
    const [orbit, setOrbit] = useState('');
    const [diameter, setDiameter] = useState('');
    const [climate, setClimate] = useState('');
    const [gravity, setGravity] = useState('');
    const [water, setWater] = useState('');
    const [error, setError] = useState('');
    const [terrain, setTerrain] = useState('none');

    const actions=[
        {
            label: 'Name',
            value: name,
            inputType: 'text',
            action: (e) => {setName(e.target.value)}
        },
        {
            label: 'Rotation Period',
            value: rotation,
            inputType: 'number',
            action: (e) => {setRotation(e.target.value)}
        },
        {
            label: 'Diameter',
            value: diameter,
            inputType: 'number',
            action: (e) => {setDiameter(e.target.value)}
        },
        {
            label: 'Orbit Period',
            value: orbit,
            inputType: 'number',
            action: (e) => {setOrbit(e.target.value)}
        },
        {
            label: 'Climate',
            value: climate,
            inputType: 'text',
            action: (e) => {setClimate(e.target.value)}
        },
        {
            label: 'Gravity',
            value: gravity,
            inputType: 'text',
            action: (e) => {setGravity(e.target.value)}
        },
        {
            label: 'Surface Water',
            value: water,
            inputType: 'number',
            action: (e) => {setWater(e.target.value)}
        },
    ];

    function handleSubmit(e){
        e.preventDefault();
        if(!actions.some(act => act.value === '')){
            if(terrain !== 'none')
            {
                setError('');
                alert('Yay!! Planet Is Completed');
                setOpen(false);
            }
            else{
                setError('Please Slect a Terrain');        
            }
        }
        else{
            setError('Please Enter All Fileds');
        }
    }

    return (
        <div className='backdrop' onClick={(e) => {
            if(e.target.classList.contains('backdrop'))
            setOpen(false)}}>
            <form className='dailog'>
                <div className='heading'>Add Planet</div>
                {
                    actions.map((action, i) => 
                    <div key={i} className='input' >
                        <label htmlFor={`${action.value}`} >{action.label} </label>
                        <input type={action.inputType} value={action.value} name={`${action.value}`} onChange={(e) => action.action(e)}/>   
                    </div>)
                }
                <div className='translateBox'>
                    <label htmlFor='translateName'> Terrain: </label>
                    <select name='translateName' value={terrain} onChange={(e)=>setTerrain(e.target.value)}>
                        <option value='none'>None</option>
                        <option value='Planet1'>Planet1</option>
                        <option value='Planet2'>Planet2</option>
                        <option value='Planet3'>Planet3</option>
                    </select>
                </div>
                {
                    error && <div className='error'>{error}</div>
                }
            <button className='submit' type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Modal
