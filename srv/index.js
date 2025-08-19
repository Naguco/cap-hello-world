const { default: cds } = require("@sap/cds");

class SalutatorService extends cds.ApplicationService {

    init() {
        this.on("hello", (req) => {
            let user = req.user.id

            if (user === 'anonymous') {
                user = 'user'
            }

            return `Hello ${user}!`
        })
    }

}

class AdminSalutatorService extends cds.ApplicationService {
    
    init() {
        this.on("hello", (req) => {
            let user = req.user.id
            return `Hello admin: ${user}!`
        })
    }

}

module.exports = {SalutatorService, AdminSalutatorService}