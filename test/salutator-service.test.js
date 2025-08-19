const cds = require('@sap/cds')


describe("Salutator Service Tests", () => {

    const test = cds.test(__dirname+'/..')

    it('Should return a hello world message', async () => {
        const { GET, assert } = test

        let answer = await GET('/odata/v4/salutator/hello')
        assert(String(answer.data.value).includes('Hello'), "It is not returnin a hello value")

    })

})