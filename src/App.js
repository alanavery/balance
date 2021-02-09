import React, { useState } from 'react';
import './App.css';

import NewTransactionForm from './components/NewTransactionForm';
import Transaction from './components/Transaction';

function App() {
  const [transactionId, setTransactionId] = useState(0);
  const [amount, setAmount] = useState(0);
  const [payee, setPayee] = useState('');
  const [transactions, setTransactions] = useState([]);

  const listTransactions = transactions.map((transaction) => {
    return <p key={transactionId}>{transaction.description}</p>;
  });

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await setTransactionId(transactionId + 1);
      const updatedTransactions = transactions;
      updatedTransactions.push({
        id: transactionId,
        description: `You paid ${payee} $${amount}.`,
      });
      setTransactions(updatedTransactions);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="container">
      <NewTransactionForm amount={amount} setAmount={setAmount} payee={payee} setPayee={setPayee} handleSubmit={handleSubmit} />
      <div>{listTransactions}</div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
