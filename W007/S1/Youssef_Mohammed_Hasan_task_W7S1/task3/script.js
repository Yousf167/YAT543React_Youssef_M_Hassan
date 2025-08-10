let num = parseInt(prompt("Enter a number"))
let sign;
if (num > 0){
      sign = "positive"
}
else if(num == 0){
      sign = "zero"
}
else{
      sign = "negative"
}
window.alert(`The number is ${sign}`)