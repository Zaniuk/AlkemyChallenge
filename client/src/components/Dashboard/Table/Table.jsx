import React from 'react'
import TableItem from './TableItem'
import { useState, useEffect } from 'react'
import { getLatest } from '../../../helpers/helpers'
import './Table.css'
export default function Table() {
    const [operations, setOperations] = useState([])
    
    useEffect(()=>{
        getLatest('62d34380b3954d8270d05ea2').then(res => setOperations(res))
    }, [])
  return (
    <section>
        <h2 id='table-title'>Últimas operaciones realizadas</h2>
        <table role="grid">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Tipo</th>
                    <th>Concepto</th>
                    <th>Monto</th>
                    <th><div className='add-container'><button className='add-operation'>+</button></div></th>
                </tr>
            </thead>
            <tbody>
            {
                operations.map((operation) => {
                    return <TableItem key={operation._id} operation={operation}/>
                })
            }
            </tbody>
        
        </table>
    </section>
  )
}
