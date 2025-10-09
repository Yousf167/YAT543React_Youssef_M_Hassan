import { useEffect, useState } from "react";

function App() {
  const [products , setProducts] = useState([])
  const [textInputValue , setTextInputValue] = useState("")
  let [filteredProducts , setFilteredProducts] = useState([])
  // On Mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(body => setProducts(body))
  } , [])
  // OnUpdate
  useEffect(() => {
    // Js Filter
    // filteredProducts = products.filter(p => p.title.toLowerCase().includes(textInputValue) || 
    //                                         p.title.toUpperCase().includes(textInputValue) || 
    //                                         p.title.includes(textInputValue))

    setFilteredProducts(products.filter(p => p.title.toLowerCase().includes(textInputValue) || 
                                             p.title.toUpperCase().includes(textInputValue) || 
                                             p.title.includes(textInputValue)))
    console.log(filteredProducts)
  } , [textInputValue, products])
  
  // the problem was that we directly assigned the filtered products without its setter. we should also not include filteredProducts because it will trigger infinite rerendering

  return ( 
    <>
        <input type="text" 
        onChange={(e) => setTextInputValue(e.target.value)}/>
        <h1>Products List</h1>
        <hr />
        <ul>
          {
            filteredProducts.map(p => (
              <li key={p.id}> {p.title} </li>
            ))
          }
        </ul>
    </>
   );
}

export default App;