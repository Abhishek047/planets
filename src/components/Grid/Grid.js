import './Grid.css';
import GridItem from '../GridItem/GridItem'

function Grid({data: {header = [] ,values = [],actions = []}}) {

  return (
    <table className='gridTable'>
      <thead>
        <tr>
          {header.map(colName => <th key={colName}>{colName}</th>)}
          {!!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {
        values &&
        values.map((row, index) => (
        <GridItem key={index} row={row} actions={actions} header={header}/>

        // <tr key={index}>
        //   {header.map((colName) => <td key={colName}>{row[colName]}</td>)}
          
        //   {showAction ? 
        //     <td className='gridActions'>
        //       {actions.map(({label, action}) => <button onClick={() => action(row)}>{label}</button>)}
        //     </td>
        //     :  
        //     <td className='gridActions'>
        //       <button onClick={()=> setShowAction(!showAction)}>Show Actions</button>
        //     </td>
        //   }
        // </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Grid;
