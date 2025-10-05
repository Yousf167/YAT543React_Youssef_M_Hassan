import { useMemo, useState } from "react";
import { useAxios } from "../../hooks/useFetch";

function factorial(num) {
    return num === 0 ? 1 : num * factorial(num - 1)
}
// useMemo() 
function Test() {
    const users =  useAxios("https://jsonplaceholder.typicode.com/users")
    const [num , setNumber] = useState(1)
    let fact = useMemo(() => factorial(num) , [num])

    return ( 
        <>
           <div className="container my-5">
             <input type="number" name="" id="" 
             value={num} 
             onChange={e => setNumber(e.target.value)}/>
             <hr />
             <h4> Factorial of {num} : {fact} </h4>
           </div>
           <div className="container my-5">
                {
                    users.map(user => (
                        <h5 key={user.id}> {user.email} </h5>
                    ))
                }
           </div>
        </>
     );
}

export default Test;