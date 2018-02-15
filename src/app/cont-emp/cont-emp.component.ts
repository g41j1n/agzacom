import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../shared/empresas.service';
import { ProcesosService } from '../shared/procesos.service';
import { ServerService } from '../shared/server.service';
import { Response } from '@angular/http';

import { Periodo } from '../shared/periodo.model';


@Component({
  selector: 'app-cont-emp',
  templateUrl: './cont-emp.component.html',
  styleUrls: ['./cont-emp.component.css']
})
export class ContEmpComponent implements OnInit {
 empresa: string;
 rfc: string;
 logo: string;
 id: number;
 periodos: Periodo[];
seleccion: {id: number, name: string, status: string, logo: string};
  constructor(private empresasService: EmpresasService, private procesosService: ProcesosService, private server: ServerService) {
    this.empresasService.empresaSelect.subscribe(
      (elemento: {id: number, name: string, status: string, logo: string}) => this.empresaSelected(elemento)

    );
   }

  ngOnInit() {
    this.procesosService.getEmpPeriods();
    this.procesosService.emPeriodChanged.subscribe(
      (periodos: Periodo[]) => {
        this.periodos = periodos;
        console.log(this.periodos);
      }
    );
  }
  onError(error) {
    // Notificar error
    console.log(error);
  }
  onValidatedperiods(list) {
    list.map(
      (ele) => {
        // console.log(ele);
        this.procesosService.setEmpPeriods(ele.idPeriodos, ele.Anio, ele.Estatus, ele.IdEmpresaUsuario, ele.Mes, ele.usrsConectados);
      }
    );

  }
  empresaSelected(sel) {
    this.empresa = sel.name;
    this.rfc = sel.rfc;
    this.logo = sel.logo;
    this.id = sel.id;
    this.server.getEnterprisePeriods(sel.id).subscribe(
      (value: Response) => {
        const data = value.json();
        console.log(data);
        if (data.responseCode === '0' || data.responseCode === '00') {
          this.onValidatedperiods(data.listPeriods);
        } else {
          this.onError(data);
        }
      },
      (error) => this.onError(error)
    );
  }
  clearCurrPer() {
  //  limpiar current period list;
  }
  onSelectPeriodoEmp(id) {
    console.log(id);
  }
}
