
exports.up = function (knex) {
    return knex.schema.alterTable('customers', (customer) => {
        customer.string('phone_number').unique().notNullable().alter()
    })
};

exports.down = function (knex) {
    return knex.schema.alterTable('customers', (customer) => {
        customer.string('phone_number').notNullable().alter()
    })
};
