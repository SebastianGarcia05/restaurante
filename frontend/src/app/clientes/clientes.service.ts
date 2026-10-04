import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private clientes: Cliente[] = [
    { id: 1, nombre: 'Papada Pig 🐷', correo: 'pig@example.com' },
    { id: 2, nombre: 'Juan Pérez', correo: 'juan@example.com' },
    { id: 3, nombre: 'María López', correo: 'maria@example.com' }
  ];

  getClientes(): Cliente[] {
    return this.clientes;
  }
}
