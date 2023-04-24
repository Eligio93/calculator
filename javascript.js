let operator = "";
let temp = 0;
let num1 = 0;
let num2 = 0;
let cont = 0;
let display = document.getElementById("calc");
let memory = document.getElementById("memory");
display.textContent = temp;

function add(num1, num2) {
    return num1 + num2;

}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    }
}





const operation = document.querySelectorAll(".operator").forEach(function (e) {
    e.addEventListener("click", function () {
        //this statement check if is the first operation or not and in case
        //execute the operation without pressing equals button 
        //first of all check if we can already do the operation
        if (display.textContent !== "" && memory.textContent !== "") {
            num1 = parseFloat((memory.textContent).slice(0, -1));
            num2 = parseFloat((display.textContent));
            temp = operate(num1, num2, operator);
            operator = e.textContent
            memory.textContent = temp + operator;
            display.textContent = "";
        } else if (display.textContent !== "" && memory.textContent == "") {
            display.textContent = "";
            operator = e.textContent;
            memory.textContent = temp + operator;
        } else if (display.textContent == "" && memory.textContent !== "") {
            operator = e.textContent;
            memory.textContent = temp + operator;
        }
    });
});


// here just get the numbers we digit and put them in the temp variable
const num = document.querySelectorAll(".number").forEach(function (e) {
    e.addEventListener("click", function () {
        //this if check if before button "=" is been pressed
        //if yes means that the operation the user did before is complete
        //so if he start to type number again it starts a new calculation
    
        if (cont == 1) {
            cont = 0;
            display.textContent = "";
        }
        console.log(display.textContent);
        if (display.textContent === 0) {
            display.textContent = "";
        }
   
        display.textContent += e.textContent;
        temp = parseFloat(display.textContent);
   
    });
});


//button equal implemented
const equal = document.getElementById("dgequal").addEventListener("click", function () {
    cont = 1;
    if (display.textContent == "") {
        display.textContent = (memory.textContent).slice(0, -1);
        memory.textContent = "";
        temp = parseFloat(display.textContent);
        operator = "";
    } else if (memory.textContent !== "") {
        operator = (memory.textContent).slice(-1);
        num1 = parseFloat((memory.textContent).slice(0, -1));
        num2 = parseFloat(display.textContent);
        temp = operate(num1, num2, operator);
        display.textContent = temp;

        memory.textContent = "";
    }
})
//button clear implemented
const clear = document.getElementById("cleaning").addEventListener("click", function () {
    operator = "";
    temp = 0;
    num1 = 0;
    num2 = 0;
    cont = 0;
    display.textContent = temp;
    memory.textContent = "";
})


//Implement button delete
const cancel = document.getElementById("dgdel").addEventListener("click", function () {
    if ((display.textContent).length == 1) {
        display.textContent = 0;
        temp = parseFloat(display.textContent);
    } else {
        display.textContent = (display.textContent).slice(0, -1);
        temp = parseFloat(display.textContent);
    }
})
//implement button dot
const dot = document.getElementById("dgdot").addEventListener("click", function (e) {
    if ((display.textContent).includes(".")) {
        e.preventDefault();
    } else {

        display.textContent += ".";
    }

})
//implement keyboard support
const numKey=document.addEventListener("keydown", function(e){
 
    if((e.keyCode)>= 48 && (e.keyCode)<=57 || (e.keyCode)>= 96 && (e.keyCode)<=105){
        if (cont == 1) {
            cont = 0;
            display.textContent = "";
        }


        if (display.textContent === 0) {
            display.textContent = "";
        }
      
        display.textContent += e.key;
       
        temp = parseFloat(display.textContent);
        //Backspace keyboard implementation
    }else if((e.key)=="Backspace"){ 
        if ((display.textContent).length == 1) {
            display.textContent = 0;
            temp = parseFloat(display.textContent);
        } else {
            display.textContent = (display.textContent).slice(0, -1);
            temp = parseFloat(display.textContent);
        }
        //Operator Keyboard Implementation
    }else if(e.key=="+"|| e.key=="-"||e.key=="/"||e.key=="*"){
        if (display.textContent !== "" && memory.textContent !== "") {
            num1 = parseFloat((memory.textContent).slice(0, -1));
            num2 = parseFloat((display.textContent));
            temp = operate(num1, num2, operator);
            operator = e.key;
            memory.textContent = temp + operator;
            display.textContent = "";
        } else if (display.textContent !== "" && memory.textContent == "") {
            display.textContent = "";
            operator = e.key;
            memory.textContent = temp + operator;
        } else if (display.textContent == "" && memory.textContent !== "") {
            operator = e.key;
            memory.textContent = temp + operator;
        }
        //Iplement the equal from keyboard
    }else if(e.key=="Enter" || e.key=="="){
        cont = 1;
    if (display.textContent == "") {
        display.textContent = (memory.textContent).slice(0, -1);
        memory.textContent = "";
        temp = parseFloat(display.textContent);
        operator = "";
    } else if (memory.textContent !== "") {
        operator = (memory.textContent).slice(-1);
        num1 = parseFloat((memory.textContent).slice(0, -1));
        num2 = parseFloat(display.textContent);
        temp = operate(num1, num2, operator);
        display.textContent = temp;

        memory.textContent = "";
    }
    //implement dot part keyboard
    }else if(e.key = "."){
        if ((display.textContent).includes(".")) {
            e.preventDefault();
        } else {
    
            display.textContent += ".";
        }
    }
  
})
