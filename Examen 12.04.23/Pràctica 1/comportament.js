const miParrafo = document.getElementById("paragraf");

miParrafo.addEventListener("mouseover", function() {
  miParrafo.style.fontSize = "35px";
});

miParrafo.addEventListener("mouseout", function() {
  miParrafo.style.fontSize = "initial";
});

const miTitulo = document.getElementById("titul");

function cambiarColorTitulo() {
  miTitulo.style.color = "red";
}