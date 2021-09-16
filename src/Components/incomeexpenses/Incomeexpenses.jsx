import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import { motion } from "framer-motion";

const Incomeexpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions.reduce(
    (income, transaction) =>
      transaction.amount > 0 ? (income += transaction.amount) : (income += 0),
    0
  ).toFixed(2);
  const expense = transactions.reduce(
    (expense, transaction) =>
      transaction.amount < 0 ? (expense += transaction.amount) : (expense += 0),
    0
  ).toFixed(2);

  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5}}
    >
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${Math.abs(expense)}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Incomeexpenses;
