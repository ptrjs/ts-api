import express from 'express'
import router from 'router'

import { login, register } from '../controllers/authentication'

export default (router: express.Router) => {
    router.post('/auth/register', register)
    router.post('/auth/login', login)
}


