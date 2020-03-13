//document.addEventListener('DOMContentLoaded', () => {
console.log("Start");
//Auxiliar variables
let log = "";
let result = 0;
let operation = 0;
let value1 = 0;
let equalOperation = false;
//Button variables
let add = document.getElementById("addButton");
let substraction = document.getElementById("substractButton");
let multiplication = document.getElementById("multiplicationButton");
let division = document.getElementById("divisionButton");

let equal = document.getElementsByClassName("equalButton")[0];
let reset = document.getElementsByClassName("resetButton")[0];
//Input, textArea and label variables
let input_box = document.getElementsByClassName("inputNumber")[0];
let result_box = document.getElementById("resultValue");
let log_box = document.getElementById("logInformation");

    
reset.addEventListener('click', function(){  
    log= ""
    result = 0
    input_box.value = ""
    result_box.value = ""
    log_box.value = ""
    event.preventDefault() 
    console.log("Reset")   
    equalOperation = false;
})
    

add.addEventListener('click', (event)=>{  
    if(equalOperation){
        window.alert("Reset first");
    }
    else{
        operation = 1;
        if(isNaN(input_box.value) || input_box.value === ""){
            window.alert("Invalid input number");
        }
        else if(log == ""){
            log = input_box.value;
            result = Number(input_box.value);
            input_box.value = "";
        }
        else{
            result = result + Number(input_box.value); 
            log = log + " + " + input_box.value;
            input_box.value = "";
        }
    }
    event.preventDefault();
    console.log("Add");    
});

substraction.addEventListener('click', (event)=>{  
    if(equalOperation){
        window.alert("Reset first");
    }
    else{
        operation = 2;
        if(isNaN(input_box.value) || input_box.value === ""){
            window.alert("Invalid input number");
        }
        else if(log == ""){
            log = input_box.value;
            result = Number(input_box.value);
            input_box.value = "";
        }
        else{
            result = result - Number(input_box.value); 
            log = log + " - " + input_box.value;
            input_box.value = "";
        }
    }
    event.preventDefault();
    console.log("Sub");    
});

multiplication.addEventListener('click', (event)=>{  
    if(equalOperation){
        window.alert("Reset first");
    }
    else{
        operation = 3;
        if(isNaN(input_box.value) || input_box.value === ""){
            window.alert("Invalid input number");
        }
        else if(log == ""){
            log = input_box.value;
            result = Number(input_box.value);
            input_box.value = "";
        }
        else{
            result = result * Number(input_box.value); 
            log = log + " * " + input_box.value;
            input_box.value = "";
        }
    }
    event.preventDefault();
    console.log("Mult");    
});

division.addEventListener('click', (event)=>{  
    if(equalOperation){
        window.alert("Reset first");
    }
    else{
        operation = 4;
        if(isNaN(input_box.value) || input_box.value === ""){
            window.alert("Invalid input number");
        }
        else if(log == ""){
            log = input_box.value;
            result = Number(input_box.value);
            input_box.value = "";
        }
        else{
            result = result / Number(input_box.value); 
            log = log + " / " + input_box.value;
            input_box.value = "";
        }
    }
    event.preventDefault();
    console.log("Division");    
});


equal.addEventListener('click', (event)=>{
    if(equalOperation){
        window.alert("Reset first");
    }
    else{
        if(isNaN(input_box.value) || input_box.value === ""){
            window.alert("Invalid input number");
        }
        else{
            switch(operation){
                case(1):
                    log = log + " + " + input_box.value;
                    result += Number(input_box.value);
                    break;
                case(2):
                    log = log + " - " + input_box.value;
                    result -= Number(input_box.value);
                break;
                case(3):
                    log = log + " * " + input_box.value;
                    result *= Number(input_box.value);  
                    break;
                case(4):
                    log = log + " / " + input_box.value;
                    result /= Number(input_box.value);
                    break;
            }
            equalOperation = true;
            log = log + " = " + result;
            result_box.value = result;
            log_box.value = log;
        }
    }
    event.preventDefault();
    console.log("Equal");  
});