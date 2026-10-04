import { Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { CobrosComponent } from './cobros/cobros.component';

export const routes: Routes = [
    { path: 'clientes', component: ClientesComponent },
    { path: 'cobros', component: CobrosComponent },
    { path: '', redirectTo: 'clientes', pathMatch: 'full' },
];
