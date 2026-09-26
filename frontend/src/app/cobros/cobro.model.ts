export interface Cobro {
  id: number;          // Identificador único del cobro
  clienteId: number;   // Relación con el cliente (foreign key)
  monto: number;       // Valor del cobro
  fecha: string;       // Fecha del cobro (ISO string)
  estado?: string;     // Opcional: "pendiente", "pagado", etc.
}
