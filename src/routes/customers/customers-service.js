const xss = require('xss')

const CustomersService = {
    getCustomerByPhone(knex, phone) {
        return knex.select().from('customers').where('phone_number', phone).first()
    }
}

module.exports = CustomersService