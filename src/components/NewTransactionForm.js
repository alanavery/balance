function NewTransactionForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="amount">Amount</label>
      <input id="amount" type="number" value={props.amount} onChange={(event) => props.setAmount(event.target.value)} />
      <label htmlFor="payee">Payee</label>
      <input id="payee" type="text" value={props.payee} onChange={(event) => props.setPayee(event.target.value)} />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NewTransactionForm;
