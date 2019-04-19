const httpMocks = require('node-mocks-http');
const customerController    = require('../src/controllers/customerController');

test("Contiene 'dos'.", ()=>{
    const req = httpMocks.createRequest({body:{name: "Perico"}});
    const res = httpMocks.createResponse(); // @todo Como pasarle una conexión? ver mocks 
    expect(customerController.list(req, res)).toContain('dos');
});