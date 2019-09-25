const xss = require('xss')

const DashboardService = {
    getCustomerById(knex, id) {
        return knex.select().from('customers').where('id', id).first()
    },
    serializeCustomer(customer) {
        return {
            id: customer.id,
            phone_number: xss(customer.phone_number),
            email: xss(customer.email),
            name: xss(customer.name),
            registered: customer.registered
        }
    },
    createNewCustomer(knex, newCustomer) {
        return knex.insert(newCustomer).into('customers').returning('*')
            .then(([customer]) => customer)
            .then(newCustomer => DashboardService.getCustomerById(knex, newCustomer.id))
    }
}

module.exports = DashboardService