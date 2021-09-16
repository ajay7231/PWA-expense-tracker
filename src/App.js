import './App.css';
import Header from './Components/header/Header'
import TransactionList from './Components/transactionList/TransactionList';
import Addtransaction from './Components/add_transaction/Addtransaction';
import Balance from './Components/balance/Balance';
import Incomeexpenses from './Components/incomeexpenses/Incomeexpenses';
import { GlobalProvider } from './context/globalState';

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Incomeexpenses/>
        <TransactionList />
        <Addtransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
