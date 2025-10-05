import axios from "axios";
import { useEffect, useState } from "react"

const useFetch = (url) => {
 
    const [state , setState] = useState([]);

    useEffect(() => {
       fetch(url)
       .then(res => res.json())
       .then(body => setState(body))
    } , [])

    return state;

}



const useAxios = (url) => {
    const [state , setState] = useState([]);
    useEffect(() => {
       axios.get(url)
       .then(res => setState(res.data))
    } , [])

    return state;

}

export {useFetch , useAxios};

// component render 