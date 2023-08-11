import crypto from 'crypto'
import { Stringifier } from 'styled-components/dist/types'

const SECRET = 'HOME-SHARE-REST_API'

export const random = () => crypto.randomBytes(128).toString('base64')
export const authentication = (salt:string,password:string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex')
}