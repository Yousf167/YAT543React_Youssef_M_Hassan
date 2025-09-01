class Constants {
    static url = 'http://localhost:3030/courses'

    static get instructorN() {
        return document.getElementById('instructorN').value
    }

    static get courseN() {
        return document.getElementById('courseN').value
    }

    static get price() {
        return parseFloat(document.getElementById('price').value)
    }

    static get desc() {
        return document.getElementById('desc').value
    }

    static resetForm() {
        document.getElementById('instructorN').value = ""
        document.getElementById('courseN').value = ""
        document.getElementById('price').value = ""
        document.getElementById('desc').value = ""
    }
}


class Course {

    constructor(In, cn, cp, desc) {
        this._in = In
        this._cn = cn
        this._cp = cp
        this._desc = desc
    }

    get instructor() {
        return this._in
    }

    get courseName() {
        return this._cn
    }

    get coursePrice() {
        return this._cp
    }

    get description() {
        return this._desc
    }

    set instructor(value) {
        this._in = value
    }

    set courseName(value) {
        this._cn = value
    }

    set coursePrice(value) {
        if (value < 0) throw new Error("Course price cannot be negative")
        this._cp = value
    }

    set description(value) {
        this._desc = value
    }

    static createFromForm() {
        const c = new Course(Constants.instructorN, Constants.courseN, Constants.price, Constants.desc)
        return c
    }

    addToTable() {
        fetch(Constants.url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                in: this._in,
                cn: this._cn,
                cp: this._cp,
                desc: this._desc
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log("Course Added")
                Renderer.renderTable() // ✅ Call after successful POST
            })
            .catch(error => console.log("Error: ", error))
    }


    static async delete(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await Swal.fire({
                    title: "Deleted!",
                    icon: "success"
                })
                fetch(`${Constants.url}/${id}`, {
                    method: "DELETE"
                })
                    .then(response => response.json())
                    .then(data => console.log("Course Deleted"))
                    .catch(error => console.log("Error: ", error))
            }
        })
    }
}


class Renderer {
    static async renderTable() {
        const tbody = document.getElementById("tb")
        tbody.innerHTML = ""
        const request = await fetch(Constants.url)
        const body = await request.json()



        for (let element of body) {
            let course = new Course(element['in'], element['cn'], element['cp'], element['desc'])
            let tr = document.createElement('tr')
            tr.innerHTML = `
                <td>${course.instructor}</td>
                <td>${course.courseName}</td>
                <td>${course.coursePrice}</td>
                <td>${course.description}</td>
                <td><button class='btn btn-danger' onclick="Course.delete('${element.id}')">Delete</button></td>
            `
            tbody?.appendChild(tr)
        }
    }
}


document.addEventListener("DOMContentLoaded", Renderer.renderTable)



// Main driver
const form = document.querySelector('form')
form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const formFilled = (
        Constants.instructorN.trim() !== '' &&
        Constants.courseN.trim() !== '' &&
        Constants.desc.trim() !== '' &&
        !isNaN(Constants.price)
    )

    if (formFilled) {
        await Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: true
        })
        const course = Course.createFromForm()
        course.addToTable()
        Constants.resetForm()
    }
    else {
        Swal.fire({
            icon: "error",
            title: "The form is not filled or an input is invalid",
            showConfirmButton: true
        })
    }
})