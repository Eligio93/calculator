let operator="";
let temp=0;
let num1=0;
let num2=0;
let cont=0;

function add(num1,num2){
    return num1+num2;

}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}

function operate(num1,num2,operator){
    if(operator=="+"){
        return add(num1,num2);
    }else if(operator=="-"){
        return subtract(num1,num2);
    }else if(operator=="*"){
        return multiply(num1,num2);
    }else if(operator=="/"){
        return divide(num1,num2);
    }
}
let display=document.getElementById("calc");
display.textContent=temp;
const operation=document.querySelectorAll(".operator").forEach(function(e){
    e.addEventListener("click",function(){ 
        //this statement check if is the first operation or not and in case
        //execute the operation without pressing equals button 
        if(cont>0){
            num2=temp;
            num1=operate(num1,num2,operator);
            operator=e.textContent;
            document.getElementById("memory").textContent=num1+operator;
            document.getElementById("calc").textContent="";
            }else{  
        operator=e.textContent;
        document.getElementById("memory").textContent=temp+operator;
        num1=temp;
        temp=0;
        document.getElementById("calc").textContent="";
        console.log(operator) ;     
        cont+=1;}
    })
});


// here just get the numbers we digit and put them in the temp variable
const num=document.querySelectorAll(".number").forEach(function(e){
    e.addEventListener("click", function(){
        if(display.textContent==0){
            display.textContent="";
        }
        display.textContent+=e.textContent;
        temp=parseInt(display.textContent);
        console.log(temp);

    })
})

