const {average} = require('../utils/for_testing')

 describe('average', () => {
    test('de un valor es el valor mismo', () => {
        expect(average([1])).toBe(1)
    })
 })

 //Lo agrupamos en el contexto average 