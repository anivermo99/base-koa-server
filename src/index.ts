import './setup'
import Koa from 'koa'
import Router from '@koa/router'
import bodyParser from 'koa-bodyparser'
import { RegisterRoutes } from './routes'
import cors from '@koa/cors'
import { PORT } from './constants/env.constant'
import { ValidationService } from 'tsoa'

const app = new Koa()
const router = new Router()

app.use(cors()) //TODO: Solo aceptar el dominio del EC
app.use(bodyParser())

// Desabilita la validacion de TSOA
ValidationService.prototype.ValidateParam = (_property, rawValue) => rawValue
RegisterRoutes.prototype.getValidatedArgs = (args: object) => Object.keys(args)
RegisterRoutes(router)

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port: ${PORT}`)
})
