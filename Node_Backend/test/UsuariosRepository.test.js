const chai = require("chai")
const sinon = require('sinon');
const { expect } = chai;
chai.use(require("chai-string"))

const usuarioRepository = require("../src/repository/userRepository");
const UsuarioModel = require("../src/models/user");


describe('Test in usuarios repositiry', ()=> {
    let userSaveMock;

    beforeEach(()=> {
        userSaveMock = sinon.mock(new UsuarioModel({
            name: "test",
            email: "test@test.com",
            telephone: "1234567890",
            password: "test"
        }));
    });

    afterEach(()=> {
        sinon.restore();
    });


    it("should save in test", async ()=> {
        userSaveMock.expects('save').resolves(userSaveMock.object);

        const result = await usuarioRepository.createUser(userSaveMock.object);
        // console.log(result);
        expect(result).to.equal(userSaveMock.object);
        userSaveMock.verify();
    })

    it("should save in test failed", async ()=> {
        userSaveMock.expects('save').rejects('Error saving data to the database');


        try {
            await usuarioRepository.createUser(userSaveMock.object);
        } catch (err) {
            expect(err.message).to.equal('Error saving data to the database');
        }
        userSaveMock.verify();
    })
})