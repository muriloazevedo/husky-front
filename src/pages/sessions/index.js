import { useEffect } from "react"

const Sessions = () => {
  useEffect( () => {
    getToken()
   }, [])
   const getToken = async () => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const params = Object.fromEntries(urlSearchParams.entries())
    const login_token = params.login_token
    const result = await fetch("https://run.mocky.io/v3/1412eaea-a457-48a8-b78a-14fd76df2ec6", {
      method: "post",
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({
        login_token
      })
    }).then(response => response.json())
    console.log(result)
    localStorage.setItem("token", result.login_token)
   }
  return (
    <div>Sessions</div>
  )
}

export { Sessions }
