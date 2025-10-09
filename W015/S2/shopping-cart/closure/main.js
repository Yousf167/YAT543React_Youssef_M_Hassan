/**
 * Closure [function that remembers and access its lexical scope]
 */

function BankAccount() {
    let balance = 0

    function getClientBalance() {
        return `Your Balance = ${balance}`
    }

    function deposite(amount) {
        if(amount > 0) {
            balance += amount
            return `New Balance = ${balance}`
        }
        return "Enter valid amount"
    }

    function withdraw(amount) {
        if(amount > 0 && amount <= balance){
            balance -= amount
            return `New Balance = ${balance}`
        }
        return "Something Wrong .. Try Agian"
    }

    return {deposite , withdraw , getClientBalance}

}