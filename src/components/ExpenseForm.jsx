import React, {useState} from 'react'
import FormInput from './FormInput'

function ExpenseForm({ onSubmit }) {
  const [date, setDate] = useState('Data')
  const [category, setCategory] = useState('Kategoria')
  const [description, setDescription] = useState('Opis')
  const [cost, setCost] = useState('Koszt')

  const onSubmitEvent = (formValues) => {
    onSubmit(formValues)
  }

  return (
    <form id='expenseForm' onSubmit={() => onSubmitEvent({date, category, description, cost})}>
      <div className='form-row align-items-center mx-4 py-5'>
        <FormInput name='date' defaultValue={date} type='date' label='Data' onChange={setDate} colSize={2}  />
        <FormInput name='category' defaultValue={category} type='text' label='Kategoria' onChange={setCategory} colSize={3} />
        <FormInput name='description' defaultValue={description} type='text' label='Opis' onChange={setDescription} colSize={4} />
        <FormInput name='value' defaultValue={cost} type='number' label='Koszt' onChange={setCost} colSize={2} />
        <div className='addExpense'>
          <label htmlFor='submit'>
            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-square-fill ml-3 addExpense__icon" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
            </svg>
            <span className='addExpense__label'>Dodaj</span>
          </label>
          <button type='submit' id='submit' className='d-none position-absolute'></button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm

