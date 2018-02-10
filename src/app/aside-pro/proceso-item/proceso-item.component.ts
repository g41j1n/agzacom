import { Component, OnInit } from '@angular/core';
import { Proceso } from '../../shared/proceso.model';
import { ProcesosService } from '../../shared/procesos.service';
@Component({
  selector: 'app-proceso-item',
  templateUrl: './proceso-item.component.html',
  styleUrls: ['./proceso-item.component.css'],
  providers: [ ProcesosService ]
})
export class ProcesoItemComponent implements OnInit {
  // procesos: {id: number, name: string}[] = [];
  procesos: Proceso[];
  constructor(private proServ: ProcesosService) { }
  // constructor() { }

  ngOnInit() {
    this.procesos = this.proServ.getProcesos();
  }
  onSelectProceso( id ) {
    console.log(id);
  }

}
