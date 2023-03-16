var text = "";
// var i = 0;
// var i = 9;
var i = 15;

// while (i < 10) {
// text += "<br>El número es " + i;
// i++;
// }

// while (i >= 0) {
//     text += "<br>El número es " + i;
//     i --;
// }

while (i <= 25) {
    text += "<br>El número es " + i;
    i = i + 2; // sería lo mismo que i+=2;
}

document.getElementById("demo").innerHTML = text;