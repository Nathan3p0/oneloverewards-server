const xss = require('xss')

const MembersService = {
    getCustomerByPhone(knex, phone) {
        return knex.select().from('customers').where('phone_number', phone).first()
    },
    getCustomerInfoJoin(knex, id) {
        return knex('points').join('customers', 'points.customer_id', '=', 'customers.id').select('customers.name', 'points.id').where('customers.id', id)
    },
    deleteCustomerByPhone(knex, phone) {
        return knex('customers').where('phone_number', phone).del()
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
    getAllCustomers(knex) {
        return knex.select().from('customers')
    },
    createNewCustomer(knex, newCustomer) {
        return knex.insert(newCustomer).into('customers').returning('*')
            .then(([customer]) => customer)
            .then(newCustomer => MembersService.getCustomerByPhone(knex, newCustomer.phone_number))
    },
    addCustomerPoints(knex, newPointsTotal) {
        return knex.insert(newPointsTotal).into('points').returning('*')
    }
}

module.exports = MembersService