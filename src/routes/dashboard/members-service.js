const xss = require('xss')

const MembersService = {
    getCustomerByPhone(knex, phone) {
        return knex.select().from('customers').where('phone_number', phone).first()
    },
    getCustomerInfoJoin(knex, id) {
        return knex('points').join('customers', 'points.customer_id', '=', 'customers.id').select('customers.name', 'customers.phone_number', 'customers.email', 'points.points_total', 'points.id AS point_id', 'customers.id AS customer_id').where('customers.id', id).first()
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
    getCustomerById(knex, id) {
        return knex.select().from('customers').where('id', id).first()
    },
    addCustomerPoints(knex, newPointsTotal, id) {
        return knex('points').update(newPointsTotal).where('id', id).returning('*')
            .then(([points]) => points)
            .then(newPoints => MembersService.getCustomerById(knex, newPoints.customer_id))
    },
    createCustomerPoints(knex, newPoints) {
        return knex.insert(newPoints).into('points').returning('*')
            .then(([points]) => points)
            .then(newPoints => MembersService.getCustomerById(knex, newPoints.customer_id))
    }
}

module.exports = MembersService