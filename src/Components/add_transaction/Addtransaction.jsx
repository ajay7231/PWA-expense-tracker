import React, { useContext ,useState} from "react";
import { GlobalContext } from "../../context/globalState";
import { motion } from "framer-motion";

const Addtransaction = () => {
  const { addTransaction,transactions} = useContext(GlobalContext);
  const [text, setText] = useState('')
  const [amount, setAmount] = useState("");
  const handleAddTransaction = (e) => {
    e.preventDefault();
    addTransaction(text.toString(), parseInt(amount));
    // localStorage.setItem('transactions',JSON.stringify(transactions))
  }
  
  return (
    <React.Fragment>
      <h3>Add new transaction</h3>
      <form id="form" action="#">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <motion.button
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          whileHover={{ scale: 1.1 }}
          className="btn"
          onClick={(e) => handleAddTransaction(e)}
        >
          Add transaction
        </motion.button>
      </form>
    </React.Fragment>
  );
}

export default Addtransaction
