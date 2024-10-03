let displayValue='';
let firstOperent=null;
let secontOperent=null;
let currentOperation=null;

function updateDisplay() {
    const display=document.getElementById('display');
    display.value=displayValue;
}

function appendNumber(number) {
    displayValue +=number;
    updateDisplay();
    
}


function setOperation(operation){
    if(currentOperation !=null) calculateResult();
    firstOperent=parseFloat(displayValue);
    currentOperation=operation;
    displayValue='';
}

function calculateResult(){
    if(currentOperation===null || displayValue==='') return;
    secontOperent=parseFloat(displayValue);

    switch(currentOperation){
        case'+':
            displayValue=firstOperent + secontOperent;
            break;
        case '-':
            displayValue=firstOperent - secontOperent;
            break;
        case '*':
            displayValue=firstOperent * secontOperent;
            break;
        case '/':
            displayValue=firstOperent / secontOperent;
            break;

    }
    currentOperation=null;
    firstOperent=null;
    secontOperent=null;
    updateDisplay();
}
function clearDisplay(){
    displayValue='';
    currentOperation=null;
    firstOperent=null;
    secontOperent=null;
    updateDisplay();
    
}