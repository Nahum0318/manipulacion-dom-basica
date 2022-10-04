// vamos a seleeccionar cada elemnto que tenmso en html
const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const pRes = document.getElementById('resultado');

function btnOnClick() {
    const sumaInputs = input1.value + input2.value;
    pRes.innerText = "Resultado: "+sumaInputs;
}