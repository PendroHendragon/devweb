

const form = document.querySelector('#app');
form.addEventListener('submit', function(evento){
        evento.preventDefault();
});



let buttons = document.querySelectorAll('button');
const input = document.querySelector('input');
console.log(buttons);
for(i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(evento){
        const buttonValue = evento.target.value;


        if(buttonValue == "="){
            result = eval(input.value);
            input.value = result;

        }else{
            if(buttonValue != '.'){
                input.value += buttonValue;
            }else{
                if(input.value.indexOf('.') == -1){
                    input.value += buttonValue;
                }
            }
            if(buttonValue == "clear"){
                input.value ="";
            }
            
        }
    }

    );
}

