const jwt = require('jsonwebtoken')
const multer = require('multer')
const shortid = require('shortid')
const path = require('path')
require('dotenv').config()
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename(req, file, cb) {
        cb(null, `${shortid.generate()}-${file.originalname}`)
    },
})
exports.upload = multer({
    storage,
})

exports.requireSignin = (req, res, next) => {
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1]
            /* console.log(token) */
            const user = jwt.verify(token, process.env.JWT_SECRET)
        
            req.user = user
            return next()
        }
        return res.status(400).json({
            message: 'Authorization required',
        })
    } catch (error) {
        console.log(error)
    }

    // jwt.decode()
}
exports.userMiddleware = (req, res, next) => {
    if (req.user.role !== 'user') {
        return res.status(400).json({
            message: 'User Access denied',
        })
    }
    next()
}

exports.adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(400).json({
            message: 'Admin Access denied',
        })
    }
    next()
}
