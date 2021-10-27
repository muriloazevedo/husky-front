const InvoiceItem = ({ number, due_date, company, total_amount }) => {
  return (
    <div>
      <span>{number}</span>
      <span>{due_date}</span>
      <span>{company}</span>
      <span>{total_amount}</span>
    </div>
  )
}

export { InvoiceItem }
