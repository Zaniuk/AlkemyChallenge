import React from 'react'
import { useParams  } from "react-router-dom";
import EditOperationForm from '../components/EditOperation/EditOperationForm';

export default function Edit() {
    const params = useParams()
    const [id, type] = params.id.split('&')
    
  return (
    <section className='container'>
      <div>Edit {id}</div>
      <EditOperationForm id={id} type={type} />
    </section>
  )
}
