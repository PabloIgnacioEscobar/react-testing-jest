// const palindrome = (string) => {
//     return string
//     .split('')
//     .reverse()
//     .join('')
// }

// const average = array => {
//     let sum = 0
//     array.forEach(num => {sum += num}) 
//     return sum / array.length
// }

// module.exports = {
//     palindrome,
//     average
// }

//El metodo palindromo seria darle vuelta a la palabra.
//Mocha es una de ellas es un freamwork para hacer testing qeu te viene con algunas utilidades. Ava es muy bueno. El que vamos a usar es JEST.
//-----------------------------------------------------------------
//[Instalacion y Configuracion de jest para nuestro proyecto]
// const palindrome = (string) => {
//     return string
//     .split('')
//     .reverse()
//     .join('')
// }

// const average = array => {
//     let sum = 0
//     array.forEach(num => {sum += num}) 
//     return sum / array.length
// }

// module.exports = {
//     palindrome,
//     average
// }
//Para instalar ponemos npm install jest -D
//Cosa importantes con jest, en windows aveces puedes tener un problema en que si tu carpeta tiene espacio puede no funcionar correctamente.
//Jest esta pensando para trabajar en el cliente, esto lo que hace es que puede disimular cosas del dom. Nostros esas cosas no las nesecitamos, y puede ser problematico. Entonces en package.jason vamos a configuracion que se llama jest [41 pakage.json]. Ahi le estamos diciendo que neustro entorno va ser node. Que es el cliente.
//Por defecto jest es buscar todos los archivos que tengan el .test.js
//--------------------------------------------------------------------
//Nuestro primer test con jest.
// const palindrome = (string) => {
//   if (typeof string === 'undefined') return
//     return string
//     .split('')
//     .reverse()
//     .join('')
// }

// const average = array => {
//     let sum = 0
//     array.forEach(num => {sum += num}) 
//     return sum / array.length
// }

// module.exports = {
//     palindrome,
//     average
// }
//-------------------------------------------------------------------//[Usaremos describe para agrupar test]
const palindrome = (string) => {
    if (typeof string === 'undefined') return
      return string
      .split('')
      .reverse()
      .join('')
  }
  
  const average = (array) => {
      let sum = 0
      array.forEach(num => {sum += num}) 
      return sum / array.length
  }
  
  module.exports = {
      palindrome,
      average
  }
  