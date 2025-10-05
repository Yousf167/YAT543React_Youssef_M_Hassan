import axios from "axios";
import { useEffect, useState } from "react";

function Test() {

    const [products , setProducts] = useState([]);
    const [searchInputValue , setSearchInputValue] = useState("");
    const [searchedProducts , setSearchedProducts] = useState([]);
    
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then(res => setProducts(res.data.products))
    } , [])

    useEffect(() => {
        // filter products and return array
        let result = products.filter((product) => {
            return product.title.includes(searchInputValue)
        })
        setSearchedProducts(result);
    } , [searchInputValue])


    return ( 
        <>
            <div className="container">
                <input type="search" name="search" id="search"
                onChange={e => setSearchInputValue(e.target.value)}
                />
            <hr />
            {
                searchedProducts.map((prod) => (
                    <h4 key={prod.id}> {prod.title} </h4>
                ))
            }
            </div>
        </>
     );
}

export default Test;

//**
//  */