import express from 'express'

import {registerUSer,loginUser,updateUser,deleteUser,allUser} from '../Controller/userController.js'

const router=express.Router()

router.route('/register').post(registerUSer)
router.route('/login').post(loginUser)
router.route('/:id').put(updateUser).delete(deleteUser)
router.route('/allusers').get(allUser)

export default router