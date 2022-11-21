import jwt from 'jsonwebtoken'
const verifyToken = (req, res, next) => {
    
    const token = req.headers['Authorization']?.split(' ')[1] || req.headers['authorization']?.split(' ')[1]
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                res.send({ error: 'Invalid token' })
            } else {
                req.decoded = decoded
                next()
            }
        })
    } else {
        res.send({ error: 'No token provided' })
    }
}

export default verifyToken