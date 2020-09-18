import React, { useState } from 'react'

import Modal from './Modal';

export default function Expense({ id, date, category, description, cost, onDeleteClick, onSaveExpense }) {
  const [modal, setModal] = useState(false)

  return (
    <div className='row expense pb-3'>
      <span className='col-1 text-center expense__el'>{id}</span>
      <span className='col-2 text-center expense__el'>{date}</span>
      <span className='col-2 text-center expense__el'>{category}</span>
      <span className='col-4 text-center expense__el'>{description}</span>
      <span className='col-1 text-center expense__el'>{cost}</span>
      <div className='expense__control'>
        <svg onClick={() => setModal(!modal)} width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-pencil-square mx-2 expense__control--icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
          <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
        <svg onClick={() => onDeleteClick(id)} width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-trash-fill expense__control--icon" fill="firebrick" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
        </svg>
      </div>
      {modal ? (
        <Modal 
          type='editExpense'
          onClose={() => setModal(false)}
          onSubmit={(values) => {
            onSaveExpense(values)
            setModal(false)
          }}
          previousValues={{date, category, description, cost}}
        />
      ) : null}
    </div>
  )
}
