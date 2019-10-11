const { expect } = require('chai')
const knex = require('knex')
const app = require('../src/app')

describe('Members Endpoints', () => {
    let db

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL,
        })

        app.set('db', db)
    })

    after('disconnect from db', () => db.destroy())

    before('clean the table', () => db('customers').truncate())

    context('Given there are customers in the database', () => {
        const testCustomers = [
            {
                id: 1,
                phone_number: '734-673-5101',
                email: 'nszelag@live.com',
                name: 'Nathan Szelag',
                registered: '2029-01-22T16:28:32.615Z'
            },
            {
                id: 2,
                phone_number: '734-772-3464',
                email: 'a.szelag@live.com',
                name: 'Ashley Szelag',
                registered: '2029-01-22T16:28:32.615Z'
            },
            {
                id: 3,
                phone_number: '734-555-5421',
                email: 'sammyGibbs@live.com',
                name: 'Sammy Gibbons',
                registered: '2029-01-22T16:28:32.615Z'
            }
        ]

        // beforeEach('insert customers', () => {
        //     return db.insert(testCustomers).into('customers')
        // })

        // it('GET /api/dashboard/members responds with 200 and all of the customers', () => {
        //     return supertest(app)
        //         .get('/api/dashboard/members')
        //         .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        //         .expect(200)
        // })
    })
})