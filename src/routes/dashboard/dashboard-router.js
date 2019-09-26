const express = require('express')
const DashboardService = require('./dashboard-service')
const requireAuth = require('../../middleware/jwt-auth')
const dashboardRouter = express.Router()
const jsonBodyParser = express.json()

dashboardRouter.get('/members', (req, res, next) => {
    DashboardService.getAllCustomers(req.app.get('db'))
        .then(customers => {
            res.json(customers.map(DashboardService.serializeCustomer))
        })
        .catch(next)
})

dashboardRouter.delete('/members/:id', (req, res, next) => {
    DashboardService.deleteCustomerById(req.app.get('db'), req.params.id)
        .then(() => {
            res.status(204).end()
        })
        .catch(next)
})

dashboardRouter.post('/members', jsonBodyParser, (req, res, next) => {
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

    DashboardService.createNewCustomer(req.app.get('db'), newCustomer)
        .then(customer => res.status(200).json(DashboardService.serializeCustomer(customer)))
        .catch(next)
})

module.exports = dashboardRouter