// vamos a seleeccionar cada elemnto que tenmso en html
const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const pRes = document.getElementById('resultado');

// usamos el add event listener
// btn.addEventListener('click',btnOnClick); // este lleva dos parametros, el evento y la función, el evento es click y ejecuta la funcion creada por nostros que es btOnClick


// function btnOnClick() {
//     const sumaInputs = input1.value + input2.value;
//     pRes.innerText = "Resultado: "+sumaInputs;
// }

// para formularios
form.addEventListener('submit',sumarInputsvalues)

function sumarInputsvalues(event) {
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pRes.innerText = "Resultado: "+sumaInputs;
}