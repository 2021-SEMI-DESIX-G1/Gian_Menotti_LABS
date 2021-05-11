const funPalindro = (cadena)=>{

    let acumulador =0;
    let tipo='';

    for(let i=0;i<cadena.length;i++){
        
        let cd = cadena.charAt(i);
        let ci = cadena.charAt(cadena.length-i-1);

        if(ci ==cd){
            acumulador +=1;
        }
    }

    if(acumulador === cadena.length){
        tipo = 'Palindromo';
    }else{
        tipo = 'No es Palindromo';
    }

 
    return tipo;
}

const obtenerBinario=(numero)=>{

    let binario = '';
    let residuo =0;

    while(numero>0){
        residuo=numero%2;
        binario=binario + String(residuo);
        numero=Math.floor(numero/2);

    }
    return binario;
}

function func1(){
    _ = document.getElementById("data1").value;
    console.log(_);

    // Transformar cadena a numero
    //let numero = parseInt(cadena);
    //console.log(numero);

    //Evaluar Palindromo
    variable = '';
    variable = funPalindro(_);
    console.log(variable);


    if(variable === 'Palindromo'){

        binary = obtenerBinario(parseInt(_));

        aBinary = funPalindro(binary);

        if (aBinary === 'Palindromo'){
            console.log(`${_} es Palindromo de doble base.`)
            //App.htmlElements.resultadoInput.innerHTML =`${numero} es Palindromo de Base Doble.`;
        }
        else {
         console.log(`${_} es Palindromo.`)
         //App.htmlElements.resultadoInput.innerHTML = `${numero} es Palindromo.`;
        }
     }
};

const contarLetras = (cadena)=>{

    caracteres = {};
    for(let i=0; i<cadena.length;i++){
        if(caracteres[cadena[i]]){
            caracteres[cadena[i]]++;
        } else{
            caracteres[cadena[i]] = 1;
        }
    }
    return caracteres;
}

function func2(){
    texto = document.getElementById("data2").value;
    letras = JSON.stringify(contarLetras(texto));
    console.log(letras);
}

const getBisiesto = (year)=>{

    tipoyear = '';

    if ((year % 4) === 0){
        tipoyear = 'Bisiesto';
    }else {
        tipoyear = 'No Bisiesto';
    }

    return tipoyear;
}

function func3(){
    year = document.getElementById("data3").value;
    esBisiesto = getBisiesto(year);
    console.log(esBisiesto);
}

const getSumatoriaPrimos = (numero)=>{

    sumatoria = 0;
   

    for(num=0; num<=numero; num++){

        x = 0;
        contador = 0;
        while(x<=num){
            if(num % x == 0){
                contador += 1;
            }
            x +=  1;
        }
        if(contador == 2 | num == 1){
            
            sumatoria += num;
        }  

    }
    return sumatoria;
}

function func4(){
    _ = document.getElementById("data2").value;
    suma = getSumatoriaPrimos(_);
    console.log(`$ La sumatoria de numeros primos es: ${suma}`);
}
