const xss = require('xss')

const CustomersService = {
    getCustomerByPhone(knex, phone) {
        return knex.select().from('customers').where('phone_number', phone).first()
    },
    getCustomerRewardsById(knex, id) {
        return knex('points').join('customers', 'points.customer_id', '=', 'customers.id').select('customers.name', 'points.points_total').where('customers.id', id).first()
    },
    serializeCustomerRewards(customer) {
        return {
            name: xss(customer.name),
            points_total: customer.points_total,
            points_required: customer.points_required
        }
    },
    serializeCustomer(customer) {
        return {
            id: customer.id,
            name: xss(customer.name)
        }
    },
    getRewardsEarned(knex, points) {
        return knex('rewards').select('points_required').where('points_required', '>', points)
    }
}

module.exports = CustomersService