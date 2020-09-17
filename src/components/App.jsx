import React, { useMemo } from 'react'
import ExpenseForm from './ExpenseForm'
import useLocalStorage from '../customHooks/useLocalStorage'
import ExpensesList from './ExpensesList';

const getIndexer = () => {
  let i = parseInt(localStorage.getItem('index')) || 0;
  return () => {
    i+=1
    localStorage.setItem('index', i)
    return i
  }
}

Object.filter = (obj, predicate) => 
  Object.keys(obj)
    .filter( key => predicate(key) )
    .reduce( (res, key) => {
      res[key] = obj[key]
      return res
    }, {} )

export default function App() {
  const [ expenses, setExpenses ] = useLocalStorage('expenses', {})
  const indexer = useMemo(getIndexer, [])

  const addExpense = expense => {
    const id = indexer()
    setExpenses(expenses => ({...expenses, [id]: expense}))
  }

  const deleteExpense = id => {
    setExpenses(expenses => Object.filter(expenses, key => parseInt(key) !== parseInt(id)))
  }

  const deleteAllExpenses = () => {
    setExpenses(expanses => Object.filter(expanses, key => key === true))
    window.location.reload(false)
  }

  const saveExpense = id => (expense) => {
    setExpenses(expenses => ({...expenses, [id]: expense}))
  }

  const sumExpenses = () => {
    let sum = 0
    Object.values(expenses).map(expense => {
      return sum += parseInt(expense.cost)
    })
    return sum
  }

  return (
    <div className='container bg-info app'>
      <ExpenseForm onSubmit={addExpense} />
      <ExpensesList expenses={expenses} removeExpense={deleteExpense} editExpense={saveExpense} clearExpenses={deleteAllExpenses} />
      <h2 className='font-weight-bold text-danger text-right pr-5 mr-5'>{`${sumExpenses()} PLN`}</h2>
    </div>
  )
}
