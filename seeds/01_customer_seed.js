
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        { phone_number: '734-673-5101', name: 'Nathan Szelag', email: 'nszelag@live.com' },
        { phone_number: '734-353-5551', name: 'Sammy Gibbons', email: 's.gibbs@live.com' },
        { phone_number: '734-263-3626', name: 'Ashley Szelag', email: 'ashbash09@live.com' }
      ]);
    });
};
