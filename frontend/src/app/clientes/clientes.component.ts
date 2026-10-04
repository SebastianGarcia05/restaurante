import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { Cliente } from './cliente.model';
import { ClientesService } from './clientes.service';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule,MatTableModule],
  templateUrl: './clientes.html',
  styleUrls: ['./clientes.css'],
})
export class ClientesComponent {
  clientes: Cliente[] = [];
  nuevoCliente: Cliente = { id: 0,nombre: '', correo: '', telefono: '', direccion: '' };

  displayedColumns: string[] = ['id', 'nombre', 'correo', 'telefono', 'direccion'];
 
  constructor(private clientesService: ClientesService) {
    this.clientes = this.clientesService.getClientes();
 }
 guardarCliente() {
    if (this.nuevoCliente.nombre.trim() !== '') {
      const nuevoId = this.clientes.length + 1;
      this.clientes.push({ ...this.nuevoCliente, id: nuevoId });
      this.nuevoCliente = { id: 0, nombre: '', correo: '', telefono: '', direccion: '' };
    }
  }
}
