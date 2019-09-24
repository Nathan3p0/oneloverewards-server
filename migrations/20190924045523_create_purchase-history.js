
exports.up = function (knex) {
    return knex.schema.createTable('purchase_history', (history) => {
        history.increments('id')
        history.timestamp('purchase_date').defaultTo(knex.fn.now())
        history.integer('purchase_total').notNullable()
        history.integer('customer_id').references('customers.id').onDelete('cascade')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('purchase_history')
};
