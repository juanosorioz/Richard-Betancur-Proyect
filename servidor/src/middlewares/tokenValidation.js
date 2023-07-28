import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'

export const requireAuth = (req, res, next) => {
  //console.log(req.headers)
  const { token } = req.cookies;
  console.log(cookies)
  if(!token)
  return res.status(401).json({ message: "No token, Authorization Denied" })
}