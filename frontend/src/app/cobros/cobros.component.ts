import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cobro } from './cobro.model';
import { CobrosService } from './cobros.service';

@Component({
  selector: 'app-cobros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cobros.html',
  styleUrls: ['./cobros.css'],
})
export class CobrosComponent {
  cobros: Cobro[] = [];

  constructor(private cobrosService: CobrosService) {
    this.cobros = this.cobrosService.getCobros();
    console.log(this.cobros);
  }
}
