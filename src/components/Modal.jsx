import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';

import FormInput from './FormInput';

export default function Modal({ type, actions, onClose, onSubmit, previousValues }) {
  const [date, setDate] = useState('Data')
  const [category, setCategory] = useState('Kategoria')
  const [description, setDescription] = useState('Opis')
  const [cost, setCost] = useState('Koszt')

  useEffect(() => {
    setDate(previousValues.date)
    setCategory(previousValues.category)
    setDescription(previousValues.description)
    setCost(previousValues.cost)
  }, [previousValues])

  const renderEditModal = () => {
    return(
      <div className='modalWindow'>
        <div className='modalWindow__content'>
          <form id='expenseEditForm' onSubmit={() => onSubmit({date, category, description, cost})}>
            <div className='form-row align-items-center mx-4 py-5'>
              <FormInput name='date-modal' type='date' previousValue={date} label='Data' onChange={setDate} colSize={3}  />
              <FormInput name='category-modal' type='text' previousValue={category} label='Kategoria' onChange={setCategory} colSize={3} />
              <FormInput name='description-modal' type='text' previousValue={description} label='Opis' onChange={setDescription} colSize={3} />
              <FormInput name='value-modal' type='number' previousValue={cost} label='Koszt' onChange={setCost} colSize={2} />
              <div className='addExpense'>
                <label htmlFor='submit-modal'>
                  <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-check-square-fill ml-3 addExpense__icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span className='addExpense__label'>Zapisz</span>
                </label>
                <button type='submit' id='submit-modal' className='d-none position-absolute'></button>
              </div>
            </div>
          </form>
          <button onClick={() => onClose()} className='btn btn-secondary'>Anuluj</button>
        </div>
      </div>
    )
  }
  
  if(type === 'editExpense'){
    return ReactDOM.createPortal(
      renderEditModal(),
      document.querySelector('#modal')
    )
  }
}
