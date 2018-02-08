import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../shared/empresas.service';

@Component({
  selector: 'app-cont-emp',
  templateUrl: './cont-emp.component.html',
  styleUrls: ['./cont-emp.component.css']
})
export class ContEmpComponent implements OnInit {
 empresa: string;
 status: string;
 logo: string;
 id: number;
seleccion: {id: number, name: string, status: string, logo: string};
  constructor(private empresasService: EmpresasService) {
    this.empresasService.empresaSelect.subscribe(
      (elemento: {id: number, name: string, status: string, logo: string}) => this.empresaSelected(elemento)

    );
   }

  ngOnInit() {
  }
  empresaSelected(sel) {
    this.empresa = sel.name;
    this.status = sel.status;
    this.logo = sel.logo;
    this.id = sel.id;
  }
}
