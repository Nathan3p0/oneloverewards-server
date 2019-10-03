const express = require('express')
const MembersService = require('./members-service')
const requireAuth = require('../../middleware/jwt-auth')
const membersRouter = express.Router()
const jsonBodyParser = express.json()

membersRouter.get('/', requireAuth, (req, res, next) => {
    MembersService.getAllCustomers(req.app.get('db'))
        .then(customers => {
            res.json(customers.map(MembersService.serializeCustomer))
        })
        .catch(next)
})

membersRouter.get('/:phone_number', requireAuth, (req, res, next) => {
    MembersService.getCustomerByPhone(req.app.get('db'), req.params.phone_number)
        .then(customer => {
            if (!customer) {
                return res.status(400).json({
                    error: 'No customer with that Phone Number Found'
                })
            }
            res.json(MembersService.serializeCustomer(customer))
        })
        .catch(next)
})

membersRouter.get('/points/:customer_id', requireAuth, (req, res, next) => {
    MembersService.getCustomerInfoJoin(req.app.get('db'), req.params.customer_id)
        .then(customer => {
            if (!customer) {
                return res.status(400).json({
                    error: 'No data was found'
                })
            }
            res.json(customer)
        })
})

membersRouter.patch('/points/:id', requireAuth, jsonBodyParser, (req, res, next) => {
    const { points_total, point_id } = req.body
    const newPointsTotal = {
        points_total: points_total
    }

    for (const [key, value] of Object.entries(newPointsTotal)) {
        if (value == null) {
            return res.status(400).json({
                error: `You are missing ${key} in your request.`
            }
            )
        }
    }

    MembersService.addCustomerPoints(req.app.get('db'), newPointsTotal, point_id)
        .then(points => res.status(200).json(points))
        .catch(next)
})

membersRouter.delete('/:phone_number', (req, res, next) => {
    MembersService.deleteCustomerByPhone(req.app.get('db'), req.params.phone_number)
        .then(() => {
            res.status(204).json({
                success: 'Customer deletion from the Database was successful!'
            })
        })
        .catch(next)
})

membersRouter.post('/', requireAuth, jsonBodyParser, (req, res, next) => {
    const { phone_number, email, name } = req.body
    const newCustomer = {
        phone_number: phone_number,
        email: email,
        name: name
    }

    for (const [key, value] of Object.entries(newCustomer)) {
        if (value == null) {
            return res.status(400).json({
                error: `You are missing ${key} in your request.`
            }
            )
        }
    }

    MembersService.createNewCustomer(req.app.get('db'), newCustomer)
        .then(customer => res.status(200).json(MembersService.serializeCustomer(customer)))
        .catch(next)
})

module.exports = membersRouter