// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits[0] + "," + fruits[1] + "," + fruits[2] + "," + fruits[3]);
// document.getElementById("frutas").innerHTML = fruits.toString();

// console.log(
//   fruits[0] + " * " + fruits[1] + " * " + fruits[2] + " * " + fruits[3]
// );
// document.getElementById("frutasJoin").innerHTML = fruits.join(" * ");
// console.log(fruits);
// let fruit = fruits.pop(); //Quitaria "Mango" del array y le asigna a "fruit" ese valor
// console.log(fruits); //4 de longitud
// console.log(fruit);
// //push()
// // Equivale a mirar el propiedad length y añadir en esa posición un valor
// //fruits[fruits.length]="Kiwi"; // Índice 4
// fruits.push(fruit);
// let long = fruits.push("Kiwi");
// //Dos funciones del método
// //1. Añade en la última posición del array un valor
// //2. Devuelve la longitud nueva con ese valor añadido
// console.log(fruits); //['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi']
// console.log(long); //5

// //shift() quita el primer valor del array y recorre el resto para el principio, además devuelve "return" el valor que ha eliminado

// //Equivalencia del método shift()
// // fruits[0]= undefined;
// // for (i=1;i>length;i++){
// //     // El segundo es ahora el indice 0
// //     //el tercer valor es el indice 1...
// //     //etc
// // }

// let frutaInicial = fruits.shift();
// console.log(fruits);
// console.log(frutaInicial);

// //unshift() equivalente a push() pero por delante
// fruits.unshift(frutaInicial); //Vuelve a recuperar "Banana"
// let longUnshift = fruits.unshift("Lemon"); //Le añade "Lemon"
// console.log(fruits);
// console.log(longUnshift);

// //indexOf()

// const beasts = ["ant", "bison", "camel", "duck", "bison"];

// console.log(beasts.indexOf("bison")); //1
// console.log(beasts.indexOf("bison", 2)); //Empieza a revisar por el índice 2 y encuentra en el índice 4 el string "bison"
// console.log(beasts.indexOf("giraffe")); //-1 cuando no encuentra
// console.log(beasts.lastIndexOf("bison")); //4
// console.log(beasts.lastIndexOf("bison", 2)); //1
// console.log(beasts.lastIndexOf("bisdsadon")); // -1
// console.log(beasts.lastIndexOf("duck", 2)); // -1


// //Bucle FOR..OF para arrays
// const frutas = ["Banana", "Orange", "Apple", "Mango"];
// const lon = frutas.length;
// // for clásico
// for (let i = 0; i < lon; i++) {
//   console.log(frutas[i]);
// }
// // for...of
// for (let fruta of frutas) {
//   console.log(fruta);
// }


// const num = [10, 40, 20, 60, 30, 100];
// const lon = num.length;

// for (let i = 0; i < lon; i++){
//     document.getElementById("numForCla").innerHTML = i;
// }

// for (let nums of num) {
//     document.getElementById("numForOf").innerHTML = nums;
// }

//Ejercicio 1 Gemma
var matriz=[];
for (i = 0; i < 6; i++) {
matriz.push(i);
}

console.log(matriz);

for (let elemento of matriz) {
console.log(elemento);
}