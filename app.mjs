/**
 * Calculadora
 * ok 1. Digitar o primeiro número
 * ok 2. Receber a operação
 * ok 3. Armazenar o conteúdo do display em uma variável
 * ok 4. Apagar o texto do display
 * ok 5. Digitar o segundo número
 * ok 6. Calcular o resultado quando pressionar no botão =
 */

import calculator from "./assets/js/calculator.mjs";
 const form = document.querySelector('form');
 form.addEventListener('submit',(evento) => {
     evento.preventDefault();
 });
 const buttonList = document.querySelectorAll('button');
 for (var i = 0, len = buttonList.length; i < len; i++) {
     buttonList[i].addEventListener('click', (evento) => {
         const buttonValue = evento.target.value;
 
         calculator(buttonValue);
     }, false);
 }