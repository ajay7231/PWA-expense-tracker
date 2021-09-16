import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import { motion } from "framer-motion"
const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction,transactions } = useContext(GlobalContext);
  const handleDeleteTransaction = () => {
    deleteTransaction(transaction.id);
    // localStorage.setItem("transaction", JSON.stringify(transactions));
  }
  return (
    <React.Fragment>
      <motion.li
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1.1 }}
        className={transaction.amount < 0 ? "minus" : "plus"}
      >
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => handleDeleteTransaction()}
        >
          x
        </button>
      </motion.li>
    </React.Fragment>
  );
};

export default Transaction;
