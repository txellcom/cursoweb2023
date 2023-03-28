function FahrenheiTaCelsius(f) {
  return (5 / 9) * (f - 32);
}
document.getElementById("demo").innerHTML = FahrenheiTaCelsius(32);

function convertir() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("celsius").innerHTML = celsius.toFixed(2) + " Celsius";
  }