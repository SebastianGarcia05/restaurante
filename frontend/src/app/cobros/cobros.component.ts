import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cobro } from './cobro.model';
import { FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Cliente } from '../clientes/cliente.model';
import { ClientesService } from '../clientes/clientes.service';
import { CobrosService } from './cobros.service';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-cobros',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  templateUrl: './cobros.html',
  styleUrls: ['./cobros.css'],
})
export class CobrosComponent {
  cobros: Cobro[] = [];
  clientes: Cliente[] = [];
  cobroForm: FormGroup;
  displayedColumns: string[] = ['monto', 'fecha', 'descripcion'];

  constructor(
    private fb: FormBuilder,
    private clientesService: ClientesService,
    private cobrosService: CobrosService
  ) {
    this.clientes = this.clientesService.getClientes();
    this.cobros = this.cobrosService.getCobros();

    this.cobroForm = this.fb.group({
      cliendeId: ['', Validators.required],
      monto: ['', Validators.required],
      fecha: ['', Validators.required],
      descripcion: ['']
    });
  }

  agregarCobro() {
      if (this.cobroForm.valid) {
        const nuevoCobro: Cobro = {
          id: this.cobros.length + 1,
          clienteId: 1,
          monto: this.cobroForm.value.monto,
          fecha: this.cobroForm.value.fecha,
          descripcion: this.cobroForm.value.descripcion
        };
        this.cobros.push(nuevoCobro);
        this.cobroForm.reset();
      }
    }

    obtenerNombreCliente(id: number): string {
      const cliente = this.clientes.find(c => c.id === id);
      return cliente ? cliente.nombre : 'Desconocido';
    }
  }