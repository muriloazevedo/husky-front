import logo from './logo.svg';
import './styles.css';
import { useState } from 'react'

const Home = () => {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)

  const onSubmit = (ev) => {
    ev.preventDefault()
    console.log(email)
    // http://localhost:3000/v1/authentication/create
    fetch("http://localhost:4000/v1/authentication/create", {
      method: "post",
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: { email }
      })
    }).then(() => setSuccess(true))
  }
  return (
    <div className="App">
        <form onSubmit={onSubmit}>
            <label>Para fazer o login, insira seu email</label>
            <input type="email" onChange={(ev) => setEmail(ev.currentTarget.value)} placeholder="Insira seu email" />
        </form>
        {success && <span>Uma solicitação foi enviada para o seu email</span>}
    </div>
  );
}

export { Home };
