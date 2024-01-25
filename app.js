//Variables
let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    // Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
    console.log('Valor de intento:', numeroUsuario);

    // Agrega un console.log para verificar la comparación entre "numeroUsuario" y "numeroSecreto"
    console.log('Resultado de la comparación:', numeroUsuario == numeroSecreto);

    /*
    Este código realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        } else {
            alert('El nùmero secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos++;
        palabraVeces = 'veces';
    }
}

/*
Es importante recordar que cuando el proyecto esté disponible para
todas las personas, en lo que llamamos en el contexto del
software "entorno de producción", los comandos console.log
deben eliminarse o desactivarse, ya que pueden causar problemas
de rendimiento y seguridad.
*/

//Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
// let contador = 1;
// while (contador <= 10) {
//     alert(`Nùmero ${contador}`);
//     contador++;
// }

//Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
// let contador = 10;
// while (contador >= 1) {
//     alert(`Nùmero ${contador}`);
//     contador--;
// }

//Crea un programa de cuenta progresiva. Pide un número y 
//cuenta desde 0 hasta ese número utilizando un bucle 'while'
//en la consola del navegador.
// let numeroLimite = prompt('Ingresa un nùmero limite');
// let contador = 0;

// while (numeroLimite >= contador) {
//     alert(`Nùmero ${contador}`)
//     contador++;
// }

//Crea un programa de cuenta regresiva. Pide un número
//y regrese a 0 utilizando un
//bucle 'while' en la consola del navegador.
// let numeroLimite = prompt('Ingresa un nùmero limite');
// let contador = 0;

// while (numeroLimite >= contador) {
//     alert(`Nùmero ${numeroLimite}`)
//     numeroLimite--;
// }