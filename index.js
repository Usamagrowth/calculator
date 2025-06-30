const display = document.querySelector("#display");

function appendToDisplay(input){
    if (input === '%') {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    display.value = `${eval(display.value)} / 100`;
         } else {
       display.value += input; 
    }
}

function clearDisplay(){
 display.value = "";
}

function calculate(){
    try {
      display.value = eval(display.value)   
    } catch (error) {
        display.value = "error" 
    }
}