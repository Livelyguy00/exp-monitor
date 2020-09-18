import React, { useState } from 'react'

export default function FormInput({ name, type, colSize, onChange, defaultValue, previousValue, label }) {
  const [error, setError] = useState('')

  const validateInput = (value) => {
    if(value === '' || !value){
      setError('Wypełnij to pole')
    }
    else{
      setError('')
    }
  }

  return (
    <div className={`col-${colSize}`}>
      {previousValue ? <span>{label}</span> : null}
      <input type={type} name={name} value={previousValue} required id={name} onBlur={(e) => validateInput(e.target.value)} autoComplete='off' placeholder={defaultValue} onChange={e => onChange(e.target.value)} className='w-100 form-control' />
      { error !== '' ? <span className='text-danger'>{error}</span> : null }
    </div>
  )
}
