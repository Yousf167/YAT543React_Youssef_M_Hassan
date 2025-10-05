function printSeparator() {
    let count = 1
    return function () {
        console.log();
        count == 1 ? 0 : console.log("------------------------------------------");
        console.log();
        console.log("Question " + count++ + ':');
        console.log('------------');
    }
}
let separator = printSeparator()






/// 1
separator()

async function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    reject("Network response was not ok");
                } else {
                    return response.json();
                }
            })
            .then(data => resolve(data))
            .catch(error => reject("Cannot Get Data: " + error.message));
    });
}

await getData("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => console.log(res))
    .catch(err => console.error(err));


/// 2
separator()

function pow(num, exp) {
    if (exp == 0) return 1
    if (exp == 1) return num
    return num * pow(num, exp - 1)
}

console.log(pow(2, 10)); // 1024


/// 3
separator()

function getSecondLowestHighest(arr) {
    const createRet = (lowest, highest) => ({ secondL: lowest, secondH: highest })
    let n = arr.length

    if (n == 0) return {}
    if (n == 1) return createRet(arr[0], arr[0])
    if (n >= 2) {
        let sorted = arr.toSorted()
        let res = (n == 2 ? createRet(sorted[0], sorted[1]) : createRet(sorted[1], sorted[n - 2]))
        return res
    }
}
console.log(getSecondLowestHighest([1, 2, 3, 4, 5, 6]));


/// 4 
separator()

function isLeapYear(year) {
    if (year % 400 == 0) return true
    if (year % 100 == 0) return false
    if (year % 4 == 0) return true
    return false
}

console.log(isLeapYear(1984)); // true
console.log(isLeapYear(2004)); // true
console.log(isLeapYear(1800)); // false 
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(1600)); // true
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2028)); // true


/// 5
separator()

class BankAccount {
    #accid
    #balance
    constructor(accid, bal) {
        this.#accid = accid
        this.#balance = bal

    }

    get accountID() {
        return this.#accid
    }
    get balance() {
        return this.#balance
    }
    set balance(newbal) {
        this.#balance = newbal
    }
    deposit(x) {
        this.#balance += x
    }
    withdraw(x) {
        if (this.#balance < x) throw new Error(`Cannot withdraw: insufficient amount (${this.#balance} < ${x})`);
        this.#balance -= x
    }
}

let acc = new BankAccount(1, 1000)
acc.deposit(1000)
console.log(acc.balance); // 2000
acc.withdraw(1000)
console.log(acc.balance); // 1000



/// 6
separator()

let students = [
    { name: "Smith", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "John", rollNumber: 16, marks: 35 },
    { name: "Tiger", rollNumber: 7, marks: 55 },
]

// 1: print more than 60
let moreThan60 = students.filter((student) => student.marks > 60)
moreThan60.forEach(student => {
    console.log(student.name);
});

// 2: add 20 to <60
let adjusted = students.map((student) => {
    let res = (student.marks < 60 ? { ...student, marks: student.marks + 20 } : student)
    return res
})

//3: print totals for marks > 60
let total = adjusted.reduce((acc, curr) => {
    if (curr.marks > 60) return acc + curr.marks
    return acc
}, 0)
console.log(total);


/// 7
separator()

function binarySearch(arr, target){
    let r = arr.length - 1, l = 0, m  
    while(r >= l){
        m = Math.floor(l + (r - l) / 2)
        if(arr[m] == target){
            return m
        }
        else if(arr[m] < target){
            l = m + 1
        }
        else{
            r = m - 1
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5], 1));
console.log(binarySearch([1,2,3,4,5], 5));
console.log(binarySearch([1,2,3,4,5], 6));


/// 8
separator()

class Node{
    constructor(val, next = null){
        this.val = val ?? 0
        this.next = next ?? null
    }
}
class LinkedList{
    #head 
    #tail
    constructor(arr){
        if(arr.length == 0) throw new Error("The array is empty");
        this.#head = new Node(arr[0])
        this.#tail = this.#head
        for(let i = 1; i < arr.length; i++){
            this.append(arr[i])
        }
    }

    append(val){
        let newVal = new Node(val)
        this.#tail.next = newVal
        this.#tail = newVal
    }

    
    traverse(callback){
        let current = this.#head
        while(current != null){
            callback(current)
            current = current.next
        }
    }

    toArray(){
        let arr = []
        this.traverse((element) => arr.push(element.val))
        return arr
    }

}

let ll = new LinkedList([1,2,3,4,5,6])
ll.traverse((element) => console.log(element.val))
let llArr = ll.toArray()
console.log(llArr);
