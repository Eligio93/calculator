let operator = "";
let temp = 0;
let num1 = 0;
let num2 = 0;
let array = [];
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
            num1 = parseInt((memory.textContent).slice(0, -1));
            console.log(num1);
            num2 = parseInt((display.textContent));
            console.log(num2);
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
        if (display.textContent == 0) {
            display.textContent = "";
        }
        display.textContent += e.textContent;
        temp = parseInt(display.textContent);
        console.log(temp);

    });
});


//button equal implemented
const equal = document.getElementById("dgequal").addEventListener("click", function () {
    if (display.textContent == "") {
        display.textContent = (memory.textContent).slice(0, -1);
        memory.textContent = "";
        temp = parseInt(display.textContent);
        operator = "";
    } else if (memory.textContent !== "") {
        operator = (memory.textContent).slice(-1);
        num1 = parseInt((memory.textContent).slice(0, -1));
        num2 = parseInt(display.textContent);
        temp= operate(num1, num2, operator);
        display.textContent=temp;
        
        memory.textContent = "";
    }
})
//button clear implemented
const clear = document.getElementById("dgclear").addEventListener("click", function () {
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
        temp = parseInt(display.textContent);
    } else {
        display.textContent = (display.textContent).slice(0, -1);
        temp = parseInt(display.textContent);
    }
})

