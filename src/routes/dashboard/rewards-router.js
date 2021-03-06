const express = require('express')
const RewardsService = require('./rewards-service')
const rewardsRouter = express.Router()

rewardsRouter.get('/', (req, res, next) => {
    RewardsService.getAllRewards(req.app.get('db'))
        .then(rewards => {
            if (!rewards) {
                return res.status(404).json({
                    error: 'No rewards were found'
                })
            }
            res.json(rewards)
        })
        .catch(next)
})

module.exports = rewardsRouter