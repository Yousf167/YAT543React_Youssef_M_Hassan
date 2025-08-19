let display = document.getElementById("display")

function append(val) {
      display.value += val
}

function calc() {
      try {
           display.value = (eval(display.value)).toFixed(3)
      } catch {
            display.value = "Error"
      }
}

function clearLast() {
      display.value = display.value.slice(0,display.value.length - 1)
}

function Clear() {
      display.value = ''
}