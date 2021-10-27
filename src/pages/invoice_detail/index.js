import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

const InvoiceDetail = ({ match }) => {
  const history = useHistory()
  const { params: { id } } = match
  const [invoice, setInvoice] = useState({})
  useEffect( () => {
    const token = localStorage.getItem("token")
    if (!token) {
      history.push("/")
      return
    }
    getInvoice(token)
  }, [])

  const getInvoice = async (token) => {
    const result = await fetch(`http://localhost:4000/v1/invoices/${id}`, {
      method: "get",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }).then(response => response.json())
    setInvoice(result.data)
  }
  const { attributes } = invoice
  if(!attributes){
    return null
  }
  return (
    <ul>
      <li>#{attributes.number}</li>
      <li>{new Date(attributes.due_date).toLocaleString()}</li>
      <li>{attributes.company}</li>
      <li>{attributes.billing}</li>
      <li>{attributes.total_amount}</li>
    </ul>
  )
}

export { InvoiceDetail }
