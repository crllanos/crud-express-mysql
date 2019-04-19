const customerController = require('../src/controllers/customerController');

test("Contiene 'uno'.", ()=>{
    expect(customerController.list({}, {send: msj=>console.log('Loguea: ', msj)})).toBeFalsy();
});