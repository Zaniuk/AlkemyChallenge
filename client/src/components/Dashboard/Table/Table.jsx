import React from 'react'
import TableItem from './TableItem'
import { useState, useEffect } from 'react'
import { getLatest } from '../../../helpers/helpers'
import './Table.css'
export default function Table() {
    const [operations, setOperations] = useState([])
    
    useEffect(()=>{
        getLatest('950620a4-9a95-4a1e-b34d-470d5096498a').then(res => {
            console.log(res)
            setOperations(res)
        })
    }, [])
  return (
    <section>
        <h2 id='table-title'>Últimas operaciones realizadas</h2>
        <figure>
            <table role="grid">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Tipo</th>
                        <th>Concepto</th>
                        <th>Monto</th>
                        <th><div className='add-container'><a href="/create"><button className='add-operation'>+</button></a></div></th>
                    </tr>
                </thead>
                <tbody>
                {
                    operations.map((operation) => {
                        return <TableItem key={operation.id} operation={operation}/>
                    })
                }
                </tbody>
            
            </table>
        </figure>
    </section>
  )
}
