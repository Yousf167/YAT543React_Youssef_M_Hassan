import { useEffect, useState } from "react"

function App() {
  let [data, setData] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(body => setData(body));
  }, [])
  return(
    <ul className="bg-white">
      {
        data.map(item => <li key={item.id}>{item.title}</li>)
      }
    </ul>
  )
}

export default App
