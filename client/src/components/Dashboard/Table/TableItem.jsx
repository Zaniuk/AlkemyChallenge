import React from 'react'
import { convertDateToStriing, deleteOperation } from '../../../helpers/helpers'


export default function TableItem({ operation , colorClass}) {
  
  const token = sessionStorage.getItem('token')
  const setOperationSymbol = (operation) => {
    if(operation.type === 'income'){
        return `+${operation.amount}`
      }else{
        return `-${operation.amount}`
      }
    }
  
  if (operation) {
    const date = convertDateToStriing(operation.date)
    return (
      <tr id={operation._id}>
        <td>{date}</td>
        <td>{operation.concept}</td>
        <td className={colorClass}>{setOperationSymbol(operation)}</td>
        <td>
          <a href={`edit/${operation.id}&${operation.type}`}>
            <button>Editar</button>
          </a>
          <button
            onClick={() => {
              deleteOperation(operation.id, token).then(location.reload())
            }}
            className='delete-button'>
            Eliminar
          </button>
        </td>
      </tr>
    )
  }
}
