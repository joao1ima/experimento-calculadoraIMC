
const form = document.querySelector('form');
const inputPeso = document.querySelector('#imc-peso');
const inputAltura = document.querySelector('#imc-altura');

form.onsubmit = e =>{
  e.preventDefault();

  let peso = inputPeso.value;
  let altura = inputAltura.value;
  console.log(peso,altura)

}