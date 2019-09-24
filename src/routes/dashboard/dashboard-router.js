const express = require('express')
const DashboardService = require('./dashboard-service')
const requireAuth = require('../../middleware/jwt-auth')
const dashboardRouter = express.Router()
const jsonBodyParser = express.json()

dashboardRouter.post('/add-member', requireAuth, jsonBodyParser, (req, res, next) => {
    const { phone_number, email, name } = req.body

    const newCustomer = {
        phone_number,
        email,
        name
    }

    for (const [key, value] of Object.entries(newCustomer)) {
        if (value == null) {
            return res.status(400).json({
                error: `You are missing ${key} in your request.`
            }
            )
        }
    }
})