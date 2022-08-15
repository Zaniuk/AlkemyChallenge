import React from 'react'
import { convertDateToStriing, deleteOperation } from '../../../helpers/helpers'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

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
        <td className='buttons-row'>
          <a href={`edit/${operation.id}&${operation.type}`}>
            <button><AiFillEdit/></button>
          </a>
          <button
            onClick={() => {
              deleteOperation(operation.id, token).then(location.reload())
            }}
            className='delete-button'>
            <AiFillDelete/>
          </button>
        </td>
      </tr>
    )
  }
}
