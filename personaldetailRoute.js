import express from 'express'

import { createDetails } from '../Controller/personaldetailController.js'

const router=express.Router()

router.route('/details').post(createDetails)

export default router