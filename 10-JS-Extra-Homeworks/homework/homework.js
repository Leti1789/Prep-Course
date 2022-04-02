// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  //var nuevoArray = Object.entries(objeto);
  // console.log(nuevoArray);

  var keysArray = Object.keys(objeto)
  var valuesArray = Object.values(objeto)
  let nuevoArray = []
  for(let i=0; i < keysArray.length; i++) {
    nuevoArray.push([keysArray[i], valuesArray[i]])
  }
  return nuevoArray;
};



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí:
  var contador = {}
  var listaString = string.split('').sort()  

  for(let i=0; i<listaString.length; i++) {
    if(Object.keys(contador).includes(listaString[i])) {
      contador[listaString[i]] += 1
    }
    else{
      contador[listaString[i]] = 1
    }
  }
  return contador;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí:
  var stringLista = s.split('');

  var minusculas = [];
  var mayusculas = [];

  for(var i = 0; i < stringLista.length; i ++){
      if(stringLista[i] === stringLista[i].toUpperCase()){

        mayusculas.push(stringLista[i])
      }
      else{
           minusculas.push(stringLista[i]);
      }
  }
  var mayusculasYMinusculas = mayusculas.concat(minusculas).join('');
 
  return mayusculasYMinusculas


}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí:
  var palabra_espejo = [];
  var strArray = str.split(" ")
  for(let i = 0; i < strArray.length; i++) {
    item = strArray[i]
    item_invertido = item.split('').reverse().join('')
    palabra_espejo.push(item_invertido)
  }
  return (palabra_espejo.join(' '))
  // Otra forma de hacerlo:
  // var espejo = str.split('').reverse().join('');
  // return espejo;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número es número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí:
  var numeroString = numero.toString().split("");

var numeroCapicua = [];

for(let i = numeroString.length-1; i >= 0; i--){
  numeroCapicua.push(numeroString[i]);
}
numeroCapicua = parseInt(numeroCapicua.join(''))
numeroString = parseInt(numeroString.join(''))

if(numeroCapicua === numeroString){
  return "Es capicua";
}
return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de no contener dichas letras.
  //Escribe tu código aquí:
  var cadenaModificada = cadena.split("");

if (!cadenaModificada.includes("a" || "b" || "c")){
  return (cadenaModificada.join(''))
}
else{
  for(let i=0; i < cadenaModificada.length; i++) {
    letra = cadenaModificada[i]
    //let idx_letra = cadenaModificada.indexOf(letra)
    if(letra === 'a' || letra === 'b' || letra === 'c')
    {delete cadenaModificada[i]} 
  }
}
return (cadenaModificada.join(''));
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí:

  var arrayOrdenado = arr.sort(function (a, b){
    return a.length - b.length;
  })
  return arrayOrdenado;
};



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí: 
  var nuevo = []

for(let idx=0; idx < arreglo1.length; idx++) {
  elemento = arreglo1[idx]
  if(arreglo2.includes(elemento)) {
    nuevo.push(elemento)
  }
}
nuevo = new Set(nuevo);
nuevo = Array.from(nuevo);
return nuevo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

