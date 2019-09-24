
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        { id: 1, phone_number: '734-673-5101', email: 'nszelag@live.com', name: 'Nathan Szelag' },
        { id: 2, phone_number: '734-585-5278', email: 'info@jamaicanjerkpit.com', name: 'Rasta Mon' },
        { id: 3, phone_number: '734-399-0980', email: 'jorge.sahnchez@gmail.com', name: 'Jorge Sanchez' },
      ]);
    });
};
