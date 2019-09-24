
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('staff').del()
    .then(function () {
      // Inserts seed entries
      return knex('staff').insert([
        { id: 1, username: 'admin', password: '$2a$10$T6N0sH8c5QlL9B3qyDWRH.dRr7iYuW7Sk26NzKx5DlyuE2qQIo5qG', full_name: 'Nathan Szelag' }
      ]);
    });
};
