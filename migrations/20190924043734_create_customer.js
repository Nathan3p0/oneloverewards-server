
exports.up = function (knex) {
    return knex.schema.createTable('customers', (customer) => {
        customer.increments()
        customer.string('phone_number').notNullable()
        customer.string('email').notNullable()
        customer.string('name').notNullable()
        customer.timestamp('registered').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('customers')
};

// id, phone_number, email
// name, registered