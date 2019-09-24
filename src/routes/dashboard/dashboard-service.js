const xss = require('xss')

const DashboardService = {
    getCustomerById(knex, id) {
        return knex.select().from('customers').where('id', id).first()
    },
    createNewCustomer(knex, newCustomer) {
        return knex.insert(newCustomer).into('customers').returning('*')
            .then(([customer]) => customer)
            .then(newCustomer => DashboardService.getCustomerById(knex, newCustomer.id))
    }
}