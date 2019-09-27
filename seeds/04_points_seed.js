
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('points').del()
    .then(function () {
      // Inserts seed entries
      return knex('points').insert([
        { points_total: 150, customer_id: 1 },
        { points_total: 200, customer_id: 2 },
        { points_total: 390, customer_id: 3 }
      ]);
    });
};
