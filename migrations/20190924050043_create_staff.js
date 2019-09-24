
exports.up = function (knex) {
    return knex.schema.createTable('staff', (staff) => {
        staff.increments('id')
        staff.string('username').notNullable()
        staff.string('password').notNullable()
        staff.string('full_name').notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('staff')
};
