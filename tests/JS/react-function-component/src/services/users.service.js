export async function getusers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const body = await res.json()
    console.log(body);
    return body
}

