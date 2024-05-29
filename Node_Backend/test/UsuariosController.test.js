const chai = require("chai")
const sinon = require('sinon');
const { expect } = chai;
chai.use(require("chai-string"))

const usuarioController = require("../src/controllers/userController");
const UsuarioRepository = require("../src/repository/userRepository");
const { mockRequest, mockResponse } = require('../test/mocks/MocksController');

const resService = {
    name: "test",
    email: "test@test.com",
    telephone: "1234567890",
    password: "test"
};

describe('Test in usuarios controllers', ()=> {
    let userSaveMock;

    beforeEach(()=> {
       
    });

    afterEach(()=> {
        sinon.restore();
    });


    it("should save in test controller", async ()=> {
        let req = mockRequest();
        req.body.name = "Prueba";
        req.body.telephone = "1234567890";
        req.body.email = "test";
        req.body.password = "test";

        let res = mockResponse();
        sinon.stub(UsuarioRepository, 'createUser').resolves(resService);

        await usuarioController.userRegister(req, res);
        expect(res.status.calledWith(201)).to.be.true;
        // expect(res.message).to.equal("guardado correctamente");
        expect(res.send.calledOnce).to.be.true;
    })

    it("should save in test failed", async ()=> {
       
    })
})