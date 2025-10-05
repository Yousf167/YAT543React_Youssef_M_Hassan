import axios from "axios";

const url = "http://localhost:8000/books";

export async function getBooks() {
   return await axios.get(url);
}

export async function addBook(book) {
    return await axios.post(url , book);
}

export async function getBook(id) {
    return await axios.get(`${url}/${id}`)
}

export async function updateBook(id , book) {
    return await axios.put(`${url}/${id}` , book)
}

export async function destroyBook(id) {
    return await axios.delete(`${url}/${id}`)
} 