
exports.up = function (knex) {
    return knex.schema.createTable('rewards', (reward) => {
        reward.increments('id')
        reward.integer('points_required').notNullable()
        reward.string('discount').notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('rewards')
};
