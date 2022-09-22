// const suma = (a, b) => {
//     return a - b
// }


// console.assert(
//     suma(1, 3) === -2,
//     'Deberia de dar 4 pendejo!'
// )
//El assert es que si pones que como primer parametro es false entonces te va salir el error que tu le vas a poner como segundo parametro.
//Si ponemos en la terminal node test/suma_test.js sale el resultado. Si el resultado es correcto no aparece, pero si el resultado es incorrecto si aparece el el 'Deberia de dar 4 pendejo!'
//Uy y podriamos tener muchos casos dentro de un array.
//[Test Runner]

// const suma = (a, b) => {
//     return a - b
// }

// const checks = [
//     {a: 0, b:0, result: 0},
//     {a: 1, b:3, result: 4},
//     {a:-3, b:3, result:  0}
// ]

// checks.forEach(check =>{
//     const {a, b, result} = check

// console.assert(
//     suma(a, b) === result,
//     `La suma de ${a} y ${b} deberia ser ${result}`
//   )
// })
//Esto es comveniente por que asi podemos automatizar el mensaje. Podriamos tambien poner cual es el error que esta dando, que es lo que no esta devolviendo, pero hay herramientas mucho mejores que las que podemos hacer nosotros que lo van a archivar.

// console.log(`${checks.length} chekeos parce ...`)
//Esta no es la forma de hacer test pero esta bueno entender la funcionalidad de un metodo. Esto nos esta ayudando a nuestro objetivo, ya que hay herramientas que nos van a ayudar a ejecutar una tanda de test, de poder testear y que nos de errores lo mas descriptivos posibles para ayudarnos a detectar donde estan esos errores y esos fallos y solucionarlos.
//-----------------------------------------------------------------
//[Metodos para testear despues.] [for_testing.js]
// const suma = (a, b) => {
//     return a - b
// }

// const checks = [
//     {a: 0, b:0, result: 0},
//     {a: 1, b:3, result: 4},
//     {a:-3, b:3, result:  0}
// ]

// checks.forEach(check =>{
//     const {a, b, result} = check

// console.assert(
//     suma(a, b) === result,
//     `La suma de ${a} y ${b} deberia ser ${result}`
//   )
// })

// console.log(`${checks.length} chekeos parce ...`)
//-----------------------------------------------------------------
//[Instalacion y Configuracion de jest para nuestro proyecto]
// const suma = (a, b) => {
//     return a - b
// }

// const checks = [
//     {a: 0, b:0, result: 0},
//     {a: 1, b:3, result: 4},
//     {a:-3, b:3, result:  0}
// ]

// checks.forEach(check =>{
//     const {a, b, result} = check

// console.assert(
//     suma(a, b) === result,
//     `La suma de ${a} y ${b} deberia ser ${result}`
//   )
// })

// console.log(`${checks.length} chekeos parce ...`)
//-----------------------------------------------------------------
//Nuestro primer test con jest.
// const suma = (a, b) => {
//     return a - b
// }

// const checks = [
//     {a: 0, b:0, result: 0},
//     {a: 1, b:3, result: 4},
//     {a:-3, b:3, result:  0}
// ]

// checks.forEach(check =>{
//     const {a, b, result} = check

// console.assert(
//     suma(a, b) === result,
//     `La suma de ${a} y ${b} deberia ser ${result}`
//   )
// })

// console.log(`${checks.length} chekeos parce ...`)
//-----------------------------------------------------------------------------------
//[Usaremos describe para agrupar test]
const suma = (a, b) => {
    return a - b
}

const checks = [
    {a: 0, b:0, result: 0},
    {a: 1, b:3, result: 4},
    {a:-3, b:3, result:  0}
]

checks.forEach(check =>{
    const {a, b, result} = check

console.assert(
    suma(a, b) === result,
    `La suma de ${a} y ${b} deberia ser ${result}`
  )
})

console.log(`${checks.length} chekeos parce ...`)