import { EventEmitter } from '@angular/core';
import { Empresa } from './empresa.model';
export class EmpresasService {
private empresas: Empresa[] = [];
empresaSelect = new EventEmitter<{id: number, name: string, rfc: string, logo: string}>();
 addEmpresa(id: string, name: string, rfc: string, logo: string ) {
    this.empresas.push({id: id, name: name, rfc: rfc, logo: logo});
 }
 editEmpresa(id: number, name: string, rfc: string, logo: string) {
    this.empresas[id].name = name;
    this.empresas[id].rfc = rfc;
    this.empresas[id].logo = logo;

 }
 delEmpresa(id: number) {
 console.log(id);
 }
 getEmpresas() {
    return this.empresas.slice();
 }

}
