import { useEffect } from "react"
import { useHistory } from "react-router-dom";

const Sessions = () => {
  const history = useHistory()
  useEffect( () => {
    getToken()
   }, [])
   const getToken = async () => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const params = Object.fromEntries(urlSearchParams.entries())
    const login_token = params.login_token
    const result = await fetch("http://localhost:4000/v1/sessions/create", {
      method: "post",
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({
        login_token
      })
    }).then(response => response.json())
    console.log(result)
    localStorage.setItem("token", result.auth_token)
    history.push("/invoices")
   }
  return (
    <div>Sessions</div>
  )
}

export { Sessions }
