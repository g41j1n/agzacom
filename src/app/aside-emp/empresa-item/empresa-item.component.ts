import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../shared/empresa.model';
import { EmpresasService } from '../../shared/empresas.service';
@Component({
  selector: 'app-empresa-item',
  templateUrl: './empresa-item.component.html',
  styleUrls: ['./empresa-item.component.css']
})
export class EmpresaItemComponent implements OnInit {

  // empresas: { id: number, name: string, status: string, logo: string}[] = [];
  empresas: Empresa[];
  constructor(private empresasService: EmpresasService) { }

  ngOnInit() {
    this.empresas = this.empresasService.getEmpresas();
    // console.log(this.empresas);
  }
  test(data) {
    console.log(data);
  }
  nuevaEmpresa(id: string, name: string, rfc: string, logo: string) {
    this.empresasService.addEmpresa(id, name, rfc, logo);
  }
  onSelectEmpresa(empresa) {
    this.empresasService.empresaSelect.emit({id: empresa.id, name: empresa.name, rfc: empresa.rfc, logo: empresa.logo});
  }

}
