//No es nesesario importar test.

// const { palindrome } = require("../utils/for_testing");

// /* Hay diferentes formas de crear un test*/

// test("palindrome of Pablo", () => {
//     const result = palindrome('Pablo')
//     expect(result).toBe('olbaP')/*Aca decimos que espera un resultado y que sea el que esta en tpBe */

// }); /*Se le dice dentro que es lo que hace este test */

//Los test no solo es para saber si funciona o no nuestro metodo, sino que tambien es una forma de documentar nuestro metodos! :o
//Si una persona no sabe exactamente que hace un metodo y va justamente a los test, va entender facilmente que es lo que esta haciendo nuestro metodo. Los test te puede servir de documentacion de si misma.
//Luego para verificar esto tenemos que ir a scripts de pakage.json y poner "test": "jest --verbose" que es para tener la max informacion posible,
//Entonces ponemos npm run test

// test("palindrome of undefined", () => {
//     const result = palindrome()
//     expect(result).toBeUndefined()/*Aca decimos que espera un resultado y que sea el que esta en tpBe */
    
// });
//Esto es para saber si es vacio el resultado lo declaramos en [47][for_testing.js]
//-----------------------------------------------------------------------------------
//[Usaremos describe para agrupar test] iremos a average.test.js

const { palindrome } = require("../utils/for_testing");

test("palindrome of Pablo", () => {
    const result = palindrome('Pablo')
    expect(result).toBe('olbaP')

});

test("palindrome of undefined", () => {
    const result = palindrome()
    expect(result).toBeUndefined()
    
});
//Importante: "env": {"jest": true}, agregar eso en package jason [21]