import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../../shared/empresas.service';
// import { Empresa } from '../../shared/empresa.model';
@Component({
  selector: 'app-empresa-item',
  templateUrl: './empresa-item.component.html',
  styleUrls: ['./empresa-item.component.css']
})
export class EmpresaItemComponent implements OnInit {
  // empresas: Empresa[] = [
  //   new Empresa(1, 'Nombre Empresa', 'Proceso Activo', ''),
  //   new Empresa(2, 'Empresa 2', 'Proceso Activo', '')
  // ];
  empresas: { id: number, name: string, status: string, logo: string}[] = [];
  constructor(private empresasService: EmpresasService) { }

  ngOnInit() {
    this.empresas = this.empresasService.empresas;
  }
  test(data) {
    console.log(data);
  }
  nuevaEmpresa(name: string, status: string, logo: string) {
    this.empresasService.addEmpresa(name, status, logo);
  }
  onSelectEmpresa(empresa) {
    this.empresasService.empresaSelect.emit({id: empresa.id, name: empresa.name, status: empresa.status, logo: empresa.logo});
  }

}
