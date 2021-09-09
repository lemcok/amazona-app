import userRouter from "./routers/userRouter.js"
import jwt from 'jsonwebtoken'

export const generateToken = ( user ) => {
    return jwt.sign({
        _id: userRouter._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    },  process.env.JWT_SECRET || 'somethingsecret',
        {
            expiresIn: '30d'
        }
    )
}