import { verify } from 'jsonwebtoken'
import { Context } from './context'

export const APP_SECRET = 'appsecret321'

interface Token {
  userId: string;
  request: any;
}

export function getUserId(context: Context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET) as Token
    return verifiedToken && verifiedToken.userId
  }
}
