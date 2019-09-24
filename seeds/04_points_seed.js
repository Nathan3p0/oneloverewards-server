
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('points').del()
    .then(function () {
      // Inserts seed entries
      return knex('points').insert([
        { id: 1, points_total: 240, customer_id: 1 },
        { id: 2, points_total: 560, customer_id: 3 },
        { id: 3, points_total: 120, customer_id: 2 }
      ]);
    });
};
