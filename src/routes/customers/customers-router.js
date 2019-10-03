const express = require('express')
const CustomersService = require('./customers-service')
const requireAuth = require('../../middleware/jwt-auth')
const customersRouter = express.Router()
const jsonBodyParser = express.json()

customersRouter.get('/:phone_number', (req, res, next) => {
    const { phone_number } = req.params

    CustomersService.getCustomerByPhone(req.app.get('db'), phone_number)
        .then(customer => {
            if (!customer) {
                res.status(404).json({
                    message: `No customer found`
                })
            }
            res.json(CustomersService.serializeCustomer(customer))
        })
})

customersRouter.get('/rewards/:id', (req, res, next) => {
    const { id } = req.params

    CustomersService.getCustomerRewardsById(req.app.get('db'), id)
        .then(customer => {

            const customerReward = {
                name: customer.name,
                points_total: customer.points_total
            }

            CustomersService.getRewardsEarned(req.app.get('db'), customer.points_total)
                .then(points => {
                    if (!points) {
                        customerReward.points_required = 0
                    } else {
                        customerReward.points_required = points
                    }
                    res.json(CustomersService.serializeCustomerRewards(customerReward))
                })

        }
        )
})

module.exports = customersRouter