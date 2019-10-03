const express = require('express')
const CustomersService = require('./customers-service')
const requireAuth = require('../../middleware/jwt-auth')
const customersRouter = express.Router()
const jsonBodyParser = express.json()

customersRouter.get('/:phone_number', (req, res, next) => {
    const { phone_number } = req.params

    CustomersService.getCustomerByPhone(req.app.get('db'), phone_number)
        .then(customer => {
            res.json(customer)
        })
})

module.exports = customersRouter