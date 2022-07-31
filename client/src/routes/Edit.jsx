import React from 'react'
import { useParams  } from "react-router-dom";
export default function Edit() {
    const params = useParams()
  return (
    <div>Edit {params.id}</div>
  )
}
