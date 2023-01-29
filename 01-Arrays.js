// -----------------------------------------------------------------------------------------------------------------
//                               ARRAY METHODS - Hector Fabio Romero Bocanegra - 2205024
// -----------------------------------------------------------------------------------------------------------------

const colorsArray = ["Red", "Green", "Blue", "Black", "Cyan", "White"];
const namesArray = ["Jessica", "Juan", "Alexa"];
const multiplesOfTwo = [2, 4, 6, 8, 10];
const exoticArray = [3, 5, [2, 9, 10, 3, [7, [[[9, 1]]]]], 3, 2, 7, 3, [1, 3]];
const fruitsArray = ["Apple", "Cherry", "Passion fruit", "Tomatoe"];
console.log(`
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
					A R R E G L O S   A   U S A R
____________________________________________________________________________________________________________`);
console.log("  >> colorsArray");
console.log(colorsArray);
console.log("  >> namesArray");
console.log(namesArray);
console.log("  >> multiplesOfTwo");
console.log(multiplesOfTwo);
console.log("  >> exoticArray");
console.log(exoticArray);
console.log("  >> fruitsArray");
console.log(fruitsArray);
console.log(
	"____________________________________________________________________________________________________________"
);
//?1 Array.prototype.at()
// Recibe un valor entero como parámetro y devuelve el item en esa posición del arreglo. Permite números positivos y negativos para un recorrido de comienzo a fín o desde el final hasta el inicio de la colección.
console.log(`\n.at() = El elemento del arreglo de colores con índice 3 es: ${colorsArray.at(3)}\n`);

//?2 Array.prototype.concat()
// Sirve para unir dos o más arreglos. Retorna un nuevo arreglo y no altera los arreglos existentes.
console.log(
	`.concat() = Unir los arreglos de colores y nombres da como resultado: ${colorsArray.concat(namesArray)}\n`
);

//?3 Array.prototype.copyWithin()
// Sirve para remplazar elementos de un arreglo con una secuencia existente en este mismo sin alterar su longitud, pero si su contenido. Realiza un shallow copy de una parte del arreglo.
console.log(
	`.copyWithIn() = Remplazar los primeros 3 índices del arreglo "colorsArray" con la secuencia existente en los índices 4 y 5 : ${colorsArray.copyWithin(
		0,
		3
	)}\n`
);

//?4 Array.prototype.entries()
// Retorna un Array Iterator del arreglo (un objeto) con los pares clave valor. Se necesita emplearlo un en ciclo for para ver su contendio o usando los métodos next() y values() que se le concatean al final del método
const iteratorEntries = colorsArray.entries();
console.log(
	`.entries() = Al usar este método en el arreglo "colorsArray" y almacenando su resultado en una variable obtenemos: ${iteratorEntries}`
);
console.log(iteratorEntries.next().value);

//?5 Array.prototype.every()
// Evalua si todos los elementos de la colección cumplen una condicción, retornando un valor booleano.
console.log(
	`\n.every() = ¿Los múltiplos de dos del arreglo 'multiplesOfTwo' son todos mayor a 10?: ${multiplesOfTwo.every(
		(num) => num > 10
	)}\n`
);

//?6 Array.prototype.fill()
// Impone un valor estático en una colección desde un rango de índices dado. Retorna el arreglo modificado y altera el original.
console.log(
	`.fill() = Llenar los tres primeros índices del arreglo 'colorsArray' con "Yellow": ${colorsArray.fill(
		"Yellow",
		0,
		3
	)}\n`
);

//?7 Array.prototype.filter()
// Crea una shallow copy de una porción del arreglo brindado filtrando los elementos que cumplan una condición.
console.log(
	`.filter() = Filtrar en "namesArray" los elementos cuya longitud de caracteres sea mayor a 5: ${namesArray.filter(
		(name) => name.length > 5
	)}\n`
);

//?8 Array.prototype.find()
// Retorna el primer elemento del arreglo que cumpla con una condición. Retorna undefined si no existe elemento que cumpla con la condición.
console.log(
	`.find() = Encontrar si existe el valor "Purple" en "colorsArray": ${colorsArray.find(
		(color) => color === "Purple"
	)}\n`
);

//?9 Array.prototype.findIndex()
// Retorna el índice del primer elemento del arreglo que cumpla con una condición. Retorna -1 si no existe elemento que cumpla con la condición.
console.log(
	`.findIndex() = En "namesArray" encontrar el índice del elemento "Juan": ${namesArray.findIndex(
		(name) => name === "Juan"
	)}\n`
);

//?10 Array.prototype.findLast()
// Itera el objeto en reversa y retorna el primer elemento del arreglo que cumpla con una condición. Retorna undefined si no existe elemento que cumpla con la condición.
console.log(
	`.findLast() = En "multiplesOfTwo" retornar el primer elemento de derecha a izquierda múltiplo de 4: ${multiplesOfTwo.findLast(
		(num) => num % 4 === 0
	)}\n`
);

//?11 Array.prototype.findLastIndex()
// Itera el objeto en reversa y retorna el índice del primer elemento del arreglo que cumpla con una condición. Retorna -1 si no existe elemento que cumpla con la condición.
console.log(
	`.findLastIndex() = En "multiplesOfTwo" retornar el índice del primer elemento de derecha a izquierda múltiplo de 5: ${multiplesOfTwo.findLastIndex(
		(num) => num % 12 === 0
	)}\n`
);

//?12 Array.prototype.flat()
// Retorna un nuevo arreglo con los sub-arreglos de los elementos concatenados recursivamente según la profundidad pasada por parámetro.
console.log(`.flat() = Usando flat: ${exoticArray.flat(1)}`);
console.log(exoticArray.flat(1));

//?13 Array.prototype.flatMap()
// Realiza la función de los métodos map() y flat() respectivamento pero de forma más eficiente. Creará un nuevo arreglo y aplicará una función callback a cada elemento del arreglo para usar flat() en un nivel.
console.log(`\n.flatMap() = Usando flatMap: ${exoticArray.flatMap((num) => num)}`);
console.log(exoticArray.flatMap((num) => num));

//?14 Array.prototype.forEach()
// Ejecuta una función callback para cada elemento del arreglo en orden ascendente hasta que se acabe la iteración. No modifica/muta el arreglo pero el callback podría hacerlo.
console.log(`\n.forEach() = usar este método en el arreglo "namesArray"`);
namesArray.forEach((name, index) => {
	console.log("Estoy en el foreach en mi iteración N° " + index);
	console.log(`Nombre: ${name}`);
});

//?15 Array.from()
// Crea un nuevo arreglo con base en objeto ITERABLE.
console.log(`\nArray.from() = crear un arreglo del objeto iterable "Librería": ${Array.from("Librería")}\n`);

//?16 Array.prototype.includes()
// Retorna un valor booleano si el arreglo contiene un cierto valor en sus elementos.
console.log(`.includes() = "Green" está incluido en "colorsArray": ${colorsArray.includes("Green")}\n`);

//?17 Array.prototype.indexOf()
// Retorna el primer índice del elemento del arreglo que se encuentre en el arreglo. Se puede usar el segundo parámetro para indicar desde que posición empezará la busqueda. Retorna -1 si no se encuentra el valor buscado.
console.log(`.indexOf() = El índice del primer elemento 3 en el arreglo "exoticArray": ${exoticArray.indexOf(3)}\n`);

//?18 Array.isArray()
// Retorna true o false dependiendo de si el valor pasado como parámetro es un arreglo o no.
console.log(`Array.isArray() = ¿"exoticArray" es un arreglo?: ${Array.isArray(exoticArray)}\n`);

//?19 Array.prototype.join()
// Retorna un string concatenando todos los elementos del arreglo y separándolos por comas o un separador específico
console.log(`.join() = aplicar este método en "namesArray": ${namesArray.join("-°-")}\n`);

//?20 Array.prototype.keys()
// Retorna un Array Iterator que contiene las keys de cada índice del arreglo. Se necesita emplearlo un en ciclo for para ver su contendio o usando los métodos next() y values() que se le concatean al final del método
const iteratorKeys = namesArray.keys();
console.log(`.keys() = aplicar este método en "namesArray"": ${iteratorKeys}`);
console.log(iteratorKeys.next());

//?21 Array.prototype.lastIndexOf()
// Empieza desde atrás hacía delante y retorna el índice del primer elemento encontrado en el arreglo. Retorna -1 si no se encuentra el elememnto buscado.
console.log(
	`\n.lastIndexOf() = El índice del primer elemento 3 buscado de derecha a izquierda en el arreglo "exoticArray": ${exoticArray.lastIndexOf(
		3
	)}\n`
);

//?22 Array.prototype.map()
// Devuelve un nuevo arreglo con los resultados de la función que se le envíe como parámetro al método. Se ejecuta una vez por elemento.
console.log(
	`.map() = multiplicar todos los elementos del arreglo "multiplesOfTwo" por 5: ${multiplesOfTwo.map(
		(num) => num * 5
	)}\n`
);

//?23 Array.of()
// Crea un arreglo con base en el número de argumentos que se le pase a la función. A diferencia de Array(), este crea un arreglo del tamaño de los argumentos pasados como parámetros, evitando generar índices vacíos al momento de llamar el método.
console.log(`Array.of() = Crear un arreglo con los valores "A","Z","U" con este método: ${Array.of("A", "Z", "U")}\n`);

//?24 Array.prototype.pop()
// Elimina el último elemento del arreglo y lo retorna. Este método afecta el tamaño de la colección.
console.log(`.pop() = Eliminar el último elemento del arreglo "colorsArray": ${colorsArray.pop()}\n`);

//?25 Array.prototype.push()
// Agrega elementos a la última posición del arreglo y lo retorna la colección con los datos insertados. Este método afecta el tamaño de la colección. Retorna la longitud del arreglo afectado.
console.log(
	`.push() = Agregar al final del arreglo "colorsArray" los valores de "Pink" y "Gray" (Se retorna la longitud del arreglo): ${colorsArray.push(
		"Pink",
		"Gray"
	)}\n`
);

//?26 Array.prototype.reduce()
// Ejecuta un callback donde se almacena el valor de las operaciones anteriores y el valor actual de la iteración como paráemtros, retornando un ÚNICO VALOR. Se suele usar para realizar la sumatoria de todos los elementos de un arreglo aprovechandose del parámetro acumulador o "accumulator"
console.log(
	`.reduce() = Obtener la sumatoria de los elementos del arreglo "multiplesOfTwo": ${multiplesOfTwo.reduce(
		(accumulator, currentValue) => accumulator + currentValue
	)}\n`
);

//?27 Array.prototype.reduceRight()
// Hace el mismo comportamiento que ".reduce()", pero en sentido de derecha a izquierda
console.log(
	`.reduceRight() = Restar desde el último lugar al primero los elementos del arreglo "multiplesOfTwo": ${multiplesOfTwo.reduce(
		(accumulator, currentValue) => accumulator - currentValue
	)}\n`
);

//?28 Array.prototype.reverse()
// Muta el arreglo e invierte el orden de los elementos, siendo el último elemento de este el primero después de usar el método. Al utilizar esta función, se altera el arreglo original
console.log(`.reverse() = Invertir el orden del arreglo "multiplesOdTwo": ${multiplesOfTwo.reverse()}\n`);

//?29 Array.prototype.shift()
// Remueve el elemento ubicado en la primera posición de la colección y lo retorna. Este método altera el tamaño del arreglo
console.log(`.shift() = Extraer el primer elemento del arreglo "namesArray": ${namesArray.unshift()}\n`);

//?30 Array.prototype.slice()
// Retorna una shadow copie de una porción del arreglo desde una posición de inicio a una posición final (No incluyente). El arreglo original no se modifica
console.log(
	`.slice() = Obtener los elementos desde el índice 1 hasta el 4 del arreglo "colorsArray": ${colorsArray.slice(
		1,
		5
	)}\n`
);

//?31 Array.prototype.some()
// Verifica si al menos 1 elemento del arreglo cumple una condicción pasada como argumento en un callback y retorna un valor booleano. No muta la colección.
console.log(
	`.some() = ¿Al menos 1 elemento del arreglo "namesArray" posee una longitud mayor o igual a 5 caracteres?: ${namesArray.some(
		(name) => name.length >= 5
	)}\n`
);

//?32 Array.prototype.sort()
// Ordena los elementos de un arreglo por medio de una función de comparación o por defecto los elementos serán transformados a strings y se ordenarán de acuerdo al valor unicode o UFT-16 de manera ascendente. Este método altera el arreglo original.
console.log(`.sort() = Ordenar sin función de comparación el arreglo de "namesArray": ${namesArray.sort()}\n`);

//?33 Array.prototype.splice()
// Permite cambiar el contenido dentro de un arreglo añadiendo y/o removiendo nuevos elementos dentro de este. El primer parámetro es la posición en la que se insertará los elementos; el segundo parámetro representa la cantidad de elementos a elimianr desde el start (siendo 0 para no eliminar nada) y desde el tercer argumento se hace referencia  a los valores que se desean insertar. Retorna un arreglo con los valores eliminados
console.log(
	`.splice() = Insertar en la posición 2 y eliminar los 3 elementos sucesores a este para agregar los valores "Pineapple","Avocado" y "Kiwi". Retornar los valores eliminados del arreglo original: ${fruitsArray.splice(
		2,
		3,
		"Pineapple",
		"Avocado",
		"Kiwi"
	)}\n`
);

//?34 Array.prototype.toLocaleString()
// Retorna un solo string con sus elementos convertidos a String usando su propio método toLocaleString()
console.log(
	`.toLocaleString() = Retonar en un único string los valores del arreglo "fruitsArray" usando su propio método toLocaleString: ${fruitsArray.toLocaleString()}\n`
);

//?35 Array.prototype.toString()
// Retorna un solo string con sus elementos convertidos a String. Para los Arrays, .toString() llama al método .join() internamente y separa los elementos por comas
console.log(
	`.toString() = Retonar en un único string los valores del arreglo "fruitsArray" usando el toString() del objeto Array(): ${fruitsArray.toString()}\n`
);

//?36 Array.prototype.unshift()
// Añade uno o más elementos a la primera posición de la colección y retorna el nuevo tamaño del arreglo alterado.
console.log(
	`.shift() = Añadir a la primera posición del arreglo "multiplesOfTwo" los valores 14 y 28. Retonar el nuevo tamaño del arreglo: ${multiplesOfTwo.unshift(
		14,
		28
	)}\n`
);

//?37 Array.prototype.values()
// Retorna un Array Iterator que contiene las valores de cada índice del arreglo. Se necesita emplearlo un en ciclo for para ver su contendio o usando los métodos next() y values() que se le concatean al final del método
const iteratorValues = fruitsArray.values();
console.log(
	`.values() = aplicar este método al arreglo "fruitsArray" y usar un cilo for of para acceder a los valores del iterador:`
);
for (const iterator of iteratorValues) {
	console.log("Dentro del objeto ArrayIterator de fruitsArray: " + iterator);
}

//?38 Array.prototype[@@iterator]()
// Devuelve un iterador que permite que arroja el valor de cada índice del arreglo. Este método implementa un protocolo iterable que permite que los arreglos puedan ser consumido por la mayoría de funciones que requieren iteración (for...of loops, spread syntax). Por defecto retornará la función values()

const arr = ["a", "b", "c", "d", "e"];
console.log(
	`\nArray.prototype[@@iterator]() = demostración del método con un arreglo llamado arr que contiene: ${arr}. Usando este método, se creará un iterador llamado "arrIter" y se recorrerá a continuación: `
);
const arrIter = arr[Symbol.iterator]();
console.log(arrIter);
console.log(arrIter.next().value); // a
console.log(arrIter.next().value); // b
console.log(arrIter.next().value); // c
console.log(arrIter.next().value); // d
console.log(arrIter.next().value); // e

//?39 Array.prototype.group() - EXPERIMENTAL TECHNOLOGY (NO SUPPORT)
// Retorna un objeto con keys que contienen un arreglo con todos los elementos que cumplan una condición o posean una key en concreto. Se pretende usar para separar elementos dentro de un mismo objeto en distintas keys.
// const inventory = [
// 	{ name: "asparagus", type: "vegetables", quantity: 5 },
// 	{ name: "bananas", type: "fruit", quantity: 0 },
// 	{ name: "goat", type: "meat", quantity: 23 },
// 	{ name: "cherries", type: "fruit", quantity: 5 },
// 	{ name: "fish", type: "meat", quantity: 22 },
// ];
// const result = inventory.group(({ type }) => type);
// console.log(inventory);
/* Result is:
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/

//?40 Array.prototype.groupMap() - EXPERIMENTAL TECHNOLOGY (NO SUPPORT)
// Retorna un objeto Map (No se pueden serealizar nativamente y tienen mejor rendimiento que los objetos de JS para adicionar y remover valores.) con keys para cada grupo, las cuales tienen asignadas un arreglo que contienen los elementos que cumplan una condición de asosicación.
// const restock = { restock: true };
// const sufficient = { restock: false };
// const result = inventory.groupToMap(({ quantity }) =>
//   quantity < 6 ? restock : sufficient,
// );
// console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]

console.log(`
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
					R E S U L T A D O S   O B T E N I D O S
____________________________________________________________________________________________________________`);
console.log("  >> colorsArray");
console.log(colorsArray);
console.log("  >> namesArray");
console.log(namesArray);
console.log("  >> multiplesOfTwo");
console.log(multiplesOfTwo);
console.log("  >> exoticArray");
console.log(exoticArray);
console.log("  >> fruitsArray");
console.log(fruitsArray);
console.log(
	"____________________________________________________________________________________________________________"
);
