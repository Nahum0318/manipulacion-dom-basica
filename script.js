const h1 = document.querySelector('h1'); // seleccionar por el nombre de la etiqueta en este caso h1
const p = document.querySelector('p'); // seleccionar por el nombre de la etiqueta en este caso p
const parrafito = document.getElementsByClassName('parrafito') // para seleccionar clases
const pid = document.getElementById('pid') // para seleccionar IDs
const input = document.querySelector('input'); // seleccionamos todas las etiquetas input

h1. innerHTML = "Patito"; // insertar desde javascript html, manipulación del DOM
p.innerHTML = "Patito <br> Feo"; // con innerhtml pued4es insertar etiquetas y cambiar todo
parrafito.innerText = "Parrafito con innerText"; // con inner text no se manipula o lee hmlt, solo texto

// con getAttribute podemos traernos los atributos del elemnto seleccionado por eso el get de leer los atributos
p.getAttribute('class');
// con set attribute podemos cambair cuaklquier atributo por ejemplo p.getAttribute('class', 'verde'); se cambaiaria la clase por verde

// para ser específicos también se puede con classList el cual es específico para clases
p.classList.add('rojo'); // se agrega la clase rojo a p
p.classList.remove('rojo') // removemos la clase rojo

// creando elementos cde html con javascript
const img =  document.createElement('img');// creamos la imagen
img.setAttribute('src','https://perrosenlapradera.com/wp-content/uploads/2021/12/chihuahua.jpg'); // le pasamos el atributo de un url
pid.innerHTML = ""; // borramos lo que ya existia en Pid ya que ahora estara la imagen y esoi lo ahremos en la siguinete linea
pid.append(img); // a un elemento ya existente le pasamos la imagen mediante .apped

