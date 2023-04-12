// Pedir al usuario que introduzca los nombres de tres colores
const color1 = prompt("Introduce el nombre del primer color:");
const color2 = prompt("Introduce el nombre del segundo color:");
const color3 = prompt("Introduce el nombre del tercer color:");

// Almacenar los nombres de los tres colores en una matriz
const colores = [color1, color2, color3];

// Mostrar los colores utilizando un bucle for clásico
const bucleClasico = document.getElementById("bucle-clasico");
for (let i = 0; i < colores.length; i++) {
  const li = document.createElement("li");
  li.textContent = colores[i];
  bucleClasico.appendChild(li);
}

// Mostrar los colores utilizando un bucle for of
const bucleOf = document.getElementById("bucle-of");
for (const color of colores) {
  const li = document.createElement("li");
  li.textContent = color;
  bucleOf.appendChild(li);
}