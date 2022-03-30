const operationList = [
    '*',
    '/',
    '+',
    '-',
    '='
];


const display = document.querySelector('input');
let numero1 = "";
let numero2 = "";
let operation = ""

function calculator(buttonValue){
    if(operationList.includes(buttonValue)){
        console.log(buttonValue);
        if(buttonValue == '='){
            numero2 = display.value;
            const total = eval(numero1+operation+numero2);
            display.value = total;
        } else {
            numero1 = display.value;
            operation = buttonValue;
            display.value = "";
        }
    } else {
        if(buttonValue=='clear'){
            display.value = "";
        }else{
           if(buttonValue != '.'){
               display.value += buttonValue;
           } else{
               if(display.value.indexOf('.') == -1){
                   display.value += buttonValue;
               }
           }

        }
        
    }

}

export default calculator;