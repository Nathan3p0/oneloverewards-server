const xss = require('xss')

const RewardsService = {
    getAllRewards(knex) {
        return knex.select().from('rewards')
    }
}

module.exports = RewardsService