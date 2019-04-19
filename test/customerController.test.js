const customerController = require('../src/controllers/customerController');

test("Contiene 'dos'.", ()=>{
    // @TODO Revisar como testear correcta% un controller, acá simulo un objeto response
    expect(customerController.list()).toContain('dos');
});