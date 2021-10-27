import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react'
import { InvoiceItem } from '../components/invoice_item'

const Invoices = () => {
  const history = useHistory()
  const [invoices, setInvoices] = useState([])
  console.log(invoices)
  useEffect( () => {
    const token = localStorage.getItem("token")
    if (!token) {
      history.push("/")
      return
    }
    getInvoices(token)
  }, [])
  const getInvoices = async (token) => {
    const result = await fetch("http://localhost:4000/v1/invoices", {
      method: "get",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }).then(response => response.json())
    setInvoices(result.results.data)
  }

  return <span>Invoices</span>
}

export { Invoices }
