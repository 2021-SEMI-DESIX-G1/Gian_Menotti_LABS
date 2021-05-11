var var1 = 5;
var var2 = 4;

let let1 = 'Javascript es todo lo que necesitas.';
let let2 = 'Muerte a PHP.';

const const1 = 1;
const const2 = 'Texto';

const objeto = {
    entero: 1,
    string: 'Texto',
    bool: true,
    obj: {}
}

const suma = (var1,var2) => {
    const resultado = var1 + var2;
    console.log(`Resultado de la suma de ${var1} + ${var2} = ${resultado}`);
}

const resta = (var1, var2) => {
    const resultado = var1 - var2;
    console.log(`Resultado de la resta de ${var1} - ${var2} = ${resultado}`);
}

const multiplicacion = (var1, var2) => {
    const resultado = var1 * var2;
    console.log(`Resultado de la multiplicación de ${var1} * ${var2} = ${resultado}`);
}

const division = (var1, var2) => {
    const resultado = var1 / var2;
    console.log(`Resultado de la división de ${var1} / ${var2} = ${resultado}`);
}

const concatenar = (let1,let2) => {
    const concatenado = `${let1} ${let2}`;
    console.log(concatenado);
}

const tipoVariable = (const1, const2) => {
    console.log(`Tipo de variable: ${typeof(const1)}`);
    console.log(`Tipo de variable: ${typeof(const2)}`);
}

suma(var1,var2);
resta(var1,var2);
division(var1,var2);
multiplicacion(var1,var2);
concatenar(let1, let2);
tipoVariable(const1, const2);