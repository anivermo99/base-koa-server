import * as dotenv from 'dotenv'
import path from 'path'

const environment = process.env.APP_ENV ?? 'local'
dotenv.config({ path: path.resolve(__dirname + `../../config/.env.${environment}`) })
