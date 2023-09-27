export class CreateInmuebleDto {
  codigo: string
  area: string
  numHabitaciones: string
  numBanos: string
  numParqueadero: string
  precio: number
  tipoInmueble: 'arriendo' | 'venta'
  estadoInmueble: string
}
