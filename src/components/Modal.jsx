import React, { useState } from 'react'
import ReactDOM from 'react-dom';

import FormInput from './FormInput';

export default function Modal({ type, actions, onClose, onSubmit, previousValues }) {
  const [date, setDate] = useState('Data')
  const [category, setCategory] = useState('Kategoria')
  const [description, setDescription] = useState('Opis')
  const [cost, setCost] = useState('Koszt')

  const renderEditModal = () => {
    return(
      <div className='modalWindow'>
        <div className='modalWindow__content'>
          <form id='expenseForm'>
            <div className='form-row align-items-center mx-4 py-5'>
              <FormInput name='date' previousValue={previousValues.date} type='date' label='Data' onChange={setDate} colSize={2}  />
              <FormInput name='category' previousValue={previousValues.category} type='text' label='Kategoria' onChange={setCategory} colSize={3} />
              <FormInput name='description' previousValue={previousValues.description} type='text' label='Opis' onChange={setDescription} colSize={4} />
              <FormInput name='value' previousValue={previousValues.cost} type='number' label='Koszt' onChange={setCost} colSize={2} />
              <div className='addExpense'>
                <label>
                  <svg onClick={() => onSubmit({date, category, description, cost})} width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-check-square-fill ml-3 addExpense__icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span className='addExpense__label'>Zapisz</span>
                </label>
                <button type='submit' id='submit' className='d-none position-absolute'></button>
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
