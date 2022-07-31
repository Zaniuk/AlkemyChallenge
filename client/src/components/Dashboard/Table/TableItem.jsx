import React, { useEffect, useState } from 'react'
import { convertDateToStriing } from '../../../helpers/helpers'
export default function TableItem({operation}) {
  if(operation){
    const date = convertDateToStriing(operation.date)
    return (
        <tr id={operation._id}>
            <td>{date}</td>
            <td>{operation.type}</td>
            <td>{operation.concept}</td>  
            <td>{operation.amount}</td>
            <td><a href={`edit/${operation._id}`}><button>Editar</button></a><button className='delete-button'>Eliminar</button></td>
        </tr>
      )
  }
}
