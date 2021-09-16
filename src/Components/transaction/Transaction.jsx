import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction,transactions } = useContext(GlobalContext);
  const handleDeleteTransaction = () => {
    deleteTransaction(transaction.id);
    // localStorage.setItem("transaction", JSON.stringify(transactions));
  }
  return (
    <React.Fragment>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button className="delete-btn" onClick={()=>handleDeleteTransaction()}>x</button>
      </li>
    </React.Fragment>
  );
};

export default Transaction;
