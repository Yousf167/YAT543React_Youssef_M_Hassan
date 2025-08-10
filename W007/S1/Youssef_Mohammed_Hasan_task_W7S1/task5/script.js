let num = parseInt(prompt("Enter a number: "))
let ans = !(num % 3) && !(num % 5)
let message;
if(ans){
      message = "The number is divisible by 3 and 5"
}
else{
      message = "The number is not divisible by 3 and 5"
}

window.alert(message)