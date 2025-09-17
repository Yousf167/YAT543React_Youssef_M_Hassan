import { useEffect, useState } from "react"
import { getusers } from "./services/users.service.js";
function App() {
  const [users, setUsers] = useState([]);
  // work once => render
  useEffect(() => {
    getusers()
      .then(body => setUsers(body))
      .catch(err => console.log(err));
  }, [])

  // promise => object represent eventual 
  // completion or failure
  // httprequest => res.json()

  return (
    <>
      {
        users.map(user => (
          <h4> {user.username} </h4>
        ))
      }
    </>
  )
}

export default App
