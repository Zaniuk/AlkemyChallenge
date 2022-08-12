import React, { useEffect, useState } from 'react'
import { convertDateToStriing, deleteOperation } from '../../../helpers/helpers'
export default function TableItem({ operation }) {
  const token = '950620a4-9a95-4a1e-b34d-470d5096498a'
  if (operation) {
    const date = convertDateToStriing(operation.date)
    return (
      <tr id={operation._id}>
        <td>{date}</td>
        <td>{operation.type}</td>
        <td>{operation.concept}</td>
        <td>{operation.amount}</td>
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
