let nombre = prompt("¿Cual es tu nombre?");

alert("Hola " + nombre + ", Bienvenido a esta calculadora super y mega basica");

let numero1 = prompt("Escribe tu primera cifra");
let numero2 = prompt("Escribe tu segunda cifra");

let operacion = prompt("¿Que operacion quieres realizar? sumar, restar, dividir o multiplicar");

if (operacion == "sumar"){
    let resultado = parseInt(numero1) + parseInt(numero2)
    alert("El resultado es " + resultado)};

if (operacion == "restar"){
    let resultado = parseInt(numero1) - parseInt(numero2)
    alert("El resultado es " + resultado)};

if (operacion == "dividir"){
    let resultado = parseInt(numero1) / parseInt(numero2)
    alert("El resultado es " + resultado)
};

if (operacion == "multiplicar"){
    let resultado = parseInt(numero1) * parseInt(numero2)
    alert("El resultado es " + resultado)
};
