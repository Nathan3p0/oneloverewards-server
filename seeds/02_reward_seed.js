
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('rewards').del()
    .then(function () {
      // Inserts seed entries
      return knex('rewards').insert([
        { id: 1, points_required: 100, discount: '$5 off your purchase' },
        { id: 2, points_required: 250, discount: '$10 off your purchase' },
        { id: 3, points_required: 500, discount: '$25 off your purchase' },
        { id: 4, points_required: 1000, discount: '$50 off your purchase' },

      ]);
    });
};
