import React from 'react'
import TableItem from './TableItem'
import { useState, useEffect } from 'react'
import { getLatest } from '../../../helpers/helpers'
import './Table.css'
export default function Table() {
    const [operations, setOperations] = useState([])

    useEffect(() => {
        const token = sessionStorage.getItem('token')
        if (token) {
            getLatest(token).then(res => {
                setOperations(res)
            })
        } else {
            location.replace('/login')
        }

    }, [])
    return (
        <section>
            <h2 id='table-title'>Lastest opreations:</h2>
            <figure>
                <table role="grid">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Concept</th>
                            <th>Amount</th>
                            <th className='buttons-row'><div><a href="/create"><button className='add-operation'>+</button></a></div></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            operations.map((operation) => {
                                if(operation.type === 'income'){
                                    return <TableItem key={operation.id} colorClass={'color-positive'} operation={operation} />
                                }else{
                                    return <TableItem key={operation.id} colorClass={'color-negative'} operation={operation} />
                                }
                            })
                        }
                    </tbody>

                </table>
            </figure>
        </section>
    )
}
