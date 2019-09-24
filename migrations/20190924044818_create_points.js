
exports.up = function (knex) {
    return knex.schema.createTable('points', (points) => {
        points.increments('id')
        points.integer('points_total').notNullable()
        points.integer('customer_id').references('customers.id').onDelete('cascade')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('points')
};
