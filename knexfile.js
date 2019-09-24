// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://postgres@localhost/oneloverewards'
  },
  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
