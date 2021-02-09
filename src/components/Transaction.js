function Transaction(props) {
  return (
    <p>
      You paid {props.payee} ${props.amount}
    </p>
  );
}

export default Transaction;
