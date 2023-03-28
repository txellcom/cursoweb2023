var x, y, z, v;

//Funciones de flecha
const multiplicar = (a,b) => (a*b);
const dividir = (a,b) => (a/b);
const sumar = (a,b) => (a+b);
const restar = (a,b) => (a-b);

x = multiplicar(4, 3);
y = dividir(8, 4);
z = sumar(4, 6);
v = restar(10, 8);

document.getElementById("multi").innerHTML =
  "El resultado de multiplicar 4 * 3 = " + x;
document.getElementById("divide").innerHTML =
  "El resultado de dividir 8 / 4 = " + y;
document.getElementById("suma").innerHTML =
  "El resultado de sumar 4 + 6 = " + z;
document.getElementById("resta").innerHTML =
  "El resultado de restar 10 - 8 = " + v;

// Funciones
//   function multiplicar(a, b) {
//   return a * b;
// }

// function dividir(a, b) {
//   return a / b;
// }

// function sumar(a, b) {
//   return a + b;
// }

// function restar(a, b) {
//   return a - b;
// }



