import { Router } from 'express';
import bcrypt from 'bcryptjs'
import { data } from '../data.js';
import User from '../models/userModel.js';
import { generateToken } from '../utils.js';

const userRouter = Router();

userRouter.post('/signin', async( req, res ) => {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
        if (bcrypt.compareSync( req.body.password, user.password )) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            })
            return;
        }
    }
})

userRouter.post('/register', async(req, res) => {
    const user = await User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    })

    try {
        const createdUser = await user.save();
        res.send({
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            isAdmin: createdUser.isAdmin,
            token: generateToken(createdUser)
        })
    } catch (error) {
            const { keyPattern } = error;
            if(keyPattern?.email >= 1){
                res.status(401).send({ message: 'Email already exist' });
            }else {
                res.status(401).send( error );
            }
    }
})

userRouter.get( '/seed', async( req, res ) => {
    const createUsers = await User.insertMany( data.users );
    res.send({ createUsers });
})

export default userRouter