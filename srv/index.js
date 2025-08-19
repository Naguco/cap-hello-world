const { default: cds } = require("@sap/cds");

class SalutatorService extends cds.ApplicationService {

    init() {
        this.on("hello", () => {
            return "Hello user!"
        })
    }

}

module.exports = SalutatorService