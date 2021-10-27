import { Link } from 'react-router-dom'

const InvoiceItem = ({ id, number, due_date, company, total_amount }) => {
  return (
    <div>
      <Link to={`/invoice/${id}`}>
        <span>#{number}</span>
        <span>{new Date(due_date).toLocaleString()}</span>
        <span>{company}</span>
        <span>{total_amount}</span>
      </Link>

    </div>
  )
}

export { InvoiceItem }
