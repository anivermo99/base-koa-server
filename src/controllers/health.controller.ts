import { Controller, Get, Route } from 'tsoa'

@Route('')
export class HealthController extends Controller {
  @Get()
  public async get(): Promise<Record<string, string>> {
    //Configurar http Response
    return {
      message: 'Servidor ejecutándose correctamente',
    }
  }
}
