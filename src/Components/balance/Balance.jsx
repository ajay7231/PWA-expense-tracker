import React,{useContext} from 'react'
import { GlobalContext } from '../../context/globalState'

const Balance = () => { 
  const { transactions } = useContext(GlobalContext);
  const balance = transactions.reduce((acc, transaction) => (acc+= transaction.amount), 0).toFixed(2);
  return (
    <div>
      <h2>Your Balance</h2>
      <div>{balance < 0 ? '-' : ''}${Math.abs(balance)}</div>
    </div>
  )
}

export default Balance
