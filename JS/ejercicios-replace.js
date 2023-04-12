
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length);

// let texto = "Apple, Banana, Kiwi";
// let part = texto.slice(15, 19); //Kiwi
// console.log(part);
// part = texto.slice(7); //Banana, Kiwi (desde el valor 7)
// console.log(part);
// part = texto.slice(-12); //Banana, Kiwi (los 12 últimos valores)
// console.log(part);
// part = texto.slice(-12, -6); //Banana (del -12 al -6 no incluido)
// console.log(part);
// //Substring método
// let str = "Manzana, Plátano, Kiwi";
// document.getElementById("subs").innerHTML = str.substring(9, 16);
// console.log(str);

// //Método replace()

// function reemplaza() {
//   let textoReemplazable = document.getElementById("replace").innerHTML;
//   document.getElementById("replace").innerHTML = textoReemplazable.replace("Microsoft", "W3Schools");
// }

function reemplaza() {
  let textoReemplazable = document.getElementById("replace").innerHTML;
  document.getElementById("replace").innerHTML = textoReemplazable.replace("Lorem", "Hola");
//   replace("Lorem", "Hola"); - (/LOREM/i, "Hola") tanto si está en mayuscula como en minuscula.
//   replace("Lorem", "Hola"); - (/LOREM/g, "Hola") totes les paraules q surtin Lorem es canviaran.
}


// EJERCICIO 1 y 2
let txt1 = "pepito", txt2 = "pinganito";

if (txt1.charAt(0) === txt2[0]){
    console.log ("SI tienen la misma letra inicial")
} else {
    console.log ("NO tienen la misma letra inicial")
}
// function primeras () {
// }
// function primerasUltimas () {
// }