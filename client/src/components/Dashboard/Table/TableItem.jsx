import React, { useEffect, useState } from 'react'
import { convertDateToStriing, deleteOperation } from '../../../helpers/helpers'
export default function TableItem({ operation }) {
  if (operation) {
    const date = convertDateToStriing(operation.date)
    return (
      <tr id={operation._id}>
        <td>{date}</td>
        <td>{operation.type}</td>
        <td>{operation.concept}</td>
        <td>{operation.amount}</td>
        <td>
          <a href={`edit/${operation._id}&${operation.type}`}>
            <button>Editar</button>
          </a>
          <button
            onClick={() => {
              deleteOperation(operation._id).then(location.reload())
            }}
            className='delete-button'>
            Eliminar
          </button>
        </td>
      </tr>
    )
  }
}
