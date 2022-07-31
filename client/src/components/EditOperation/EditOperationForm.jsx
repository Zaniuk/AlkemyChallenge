import React from 'react'
import IncomeForm from './IncomeForm/IncomeForm'
import OutcomeForm from './OutcomeForm/OutcomeForm'

export default function EditOperationForm({id, type}) {
  if(type === 'outcome'){
    return <OutcomeForm id={id}/>
  }else{
    return <IncomeForm id={id}/>
  }
}
