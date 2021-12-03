
let nombre = prompt ('Escriba su nombre');
let edad = prompt ('Cual es tu edad');


console.log(nombre, typeof nombre);
console.log(edad, typeof +edad);

if (edad < 18) {
    alert('Solo mayores de 18')
    throw new Error ('Es menor')
}


alert ( "hola " + nombre + " Bienvenidx");