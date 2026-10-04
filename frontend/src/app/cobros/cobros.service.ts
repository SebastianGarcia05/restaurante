import { Injectable } from '@angular/core';
import { Cobro } from './cobro.model';

@Injectable({
  providedIn: 'root'
})
export class CobrosService {
  private cobros: Cobro[] = [];

  constructor() {}

  // Obtener todos los cobros
  getCobros(): Cobro[] {
    return this.cobros;
  }

  // Agregar un nuevo cobro
  addCobro(cobro: Cobro): void {
    this.cobros.push(cobro);
  }

  // (Opcional) Buscar cobro por ID
  getCobroById(id: number): Cobro | undefined {
    return this.cobros.find(c => c.id === id);
  }
}
