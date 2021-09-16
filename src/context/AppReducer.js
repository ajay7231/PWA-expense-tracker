export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      const ts0 = state.transactions.filter(transaction => transaction.id !== action.payload);
      localStorage.setItem("transactions", JSON.stringify(ts0));
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    case 'ADD_TRANSACTION':
      const maxId = state.transactions.reduce((max, transaction) => Math.max(max, transaction.id), 0)
      const ts = state.transactions.map(t=>t)
      ts.push({ id: maxId + 1, amount:action.payload.amount,text:action.payload.text })
      localStorage.setItem("transactions", JSON.stringify(ts))
      return {
        ...state,
        transactions: [
          ...state.transactions,
          { id: maxId + 1, amount: action.payload.amount, text: action.payload.text }
        ]
      }

    default:
      return state;
  }
}