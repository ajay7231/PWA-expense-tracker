import React,{useContext} from 'react'
import { GlobalContext } from '../../context/globalState'
import { motion } from "framer-motion";


const Balance = () => { 
  const { transactions } = useContext(GlobalContext);
  const balance = transactions.reduce((acc, transaction) => (acc+= transaction.amount), 0).toFixed(2);
  return (
    <motion.div
      initial={{ x: -1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 ,rotate:360}}
      transition={{duration: 0.5}}
    >
      <h2>Your Balance</h2>
      <div className="balance-amount">{balance < 0 ? '-' : ''}${Math.abs(balance)}</div>
    </motion.div>
  )
}

export default Balance
