// Regular functions: su contexto se definen donde se llaman. Permite ejecutar líneas de código con solo llamar el nombre de esta. Puede recibir parámetros y retornar un valor donde se es llamada
const verificarParidad = function (num) {
	const result = num % 2;
	if (result === 0) {
		console.log(`El número ${num} es par`);
	} else {
		console.log(`El número ${num} es impar`);
	}
};

// Arrow functions: tienen un comportamiento similar a las regular functions. Sin embargo, la palabra reservada "this" hereda el contexto superior donde se declara, generando situaciones confusas al momento de usar este tipo de funciones dentro de objetos o clases (no usar cómo métodos). Se destacan por ser una implementación de ES6 y contar con una sintáxis simplificada, permitiendo returns ímplicitos, escribir algoritmos cortos en una sola línea de código sin necesidad de llaves, entre otros.
const verificarParidadArrow = (num) => (num % 2 ? `El número ${num} es impar` : `El número ${num} es par`);
verificarParidad(2);
console.log(verificarParidadArrow(5));
console.log(verificarParidadArrow(8));
