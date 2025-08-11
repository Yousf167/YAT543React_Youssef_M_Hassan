let display = document.getElementById('display');

function appendValue(value) {
      display.value += value;
}

function clearDisplay() {
      display.value = '';
}

function deleteLast() {
      display.value = display.value.slice(0,display.value.length -1);
}

function calculate() {
      try {
            //i know this is bad practice but you cant put anything manually inside the display
            display.value = eval(display.value); 
      } catch {
            display.value = 'Error';
      }
}