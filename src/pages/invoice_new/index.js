import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

const InvoiceNew = () => {
  const [invoice, setInvoice] = useState({})
  const history = useHistory()
  const handleChange = (field) => (ev) => {
    const newInvoice = { ...invoice }
    newInvoice[field] = ev.currentTarget.value
    setInvoice(newInvoice)
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    const token = localStorage.getItem("token")
    if (!token) {
      history.push("/")
      return
    }

    fetch("http://localhost:4000/v1/invoices", {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        invoice,
      })
    }).then(() => history.push("/invoices"))
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input type="date" onChange={handleChange("due_date")}></input>
        </div>
        <div>
          <textarea cols="100" rows="10" placeholder="Empresa" onChange={handleChange("company")}></textarea>
        </div>
        <div>
          <textarea cols="100" rows="10" placeholder="Cobrança" onChange={handleChange("billing")}></textarea>
        </div>
        <div>
          <label htmlFor="valor_total">Valor total</label>
          <input id="valor_total" type="number" onChange={handleChange("total_amount")} />
        </div>
        <div>
          <textarea cols="100" rows="10" placeholder="Emails" onChange={handleChange("email_list")}></textarea>
        </div>
        <div>
          <input type="submit" value="Salvar" />
        </div>
      </form>
    </div>
  )
}

export { InvoiceNew }
