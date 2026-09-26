import { Injectable } from '@angular/core';
import { Cobro } from './cobro.model';

@Injectable({
  providedIn: 'root'
})
export class CobrosService {
  private cobros: Cobro[] = [
    { id: 1, clienteId: 1, monto: 50000, fecha: '2026-09-26', estado: 'pendiente' },
    { id: 2, clienteId: 2, monto: 75000, fecha: '2026-09-20', estado: 'pagado' },
    { id: 3, clienteId: 3, monto: 100000, fecha: '2026-09-15', estado: 'pendiente' }
  ];

  getCobros(): Cobro[] {
    return this.cobros;
  }
}
