const display = document.querySelector("#display");

// window.addEventListener("keyup", (e) => {
//   console.log(e);
//   if (e.key === "Escape") {
//     clearDisplay();
//     return;
//   }

//   if (e.key >= 0 && e.key <= 9) {
//     appendToDisplay(e.key);
//     return;
//   }

//   if (
//     e.key === "-" ||
//     e.key === "/" ||
//     e.key === "*" ||
//     e.key === "."
//   ) {
//     appendToDisplay(e.key);
//     return;
//   }
    
//     if (
//     e.key === "+" 
//   ) {
//     appendToDisplay(e.key);
//     return;
//   }

//   if ((e.key = "=")) {
//     calculate(e.key);
//     return;
//   }
//   alert(e.key);
// });

function appendToDisplay(input) {
 
    display.value += input;
  }

function operatorDisplay(input) {
    display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate(symb) {
    let disp = display.value
    disp = disp.split("")
    console.log(disp)
    if(disp.includes("÷")) {
        disp[disp.indexOf("÷")] = "/"
    }
    disp = disp.join("") 
  try {
    if (symb === "%") {
      display.value = eval(eval(disp) / 100);
      return;
    }
    display.value = eval(disp);
  } catch (error) {
    display.value = "error";
  }
}

function backSpace() {
  const disp = display.value
    .split("")
    .slice(0, display.value.length - 1)
    .join("");
  display.value = disp;
}
