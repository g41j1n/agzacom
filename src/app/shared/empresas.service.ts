import { EventEmitter } from '@angular/core';
import { Empresa } from './empresa.model';
export class EmpresasService {
//  empresas = [
//      {
//          id: 1,
//         name: 'Nombre Empresa',
//         status: 'Proceso Activo',
//         logo: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4543988.jpg'
//     },
//     {
//         id: 2,
//         name: 'Nombre 2',
//         status: 'Proceso Activo',
//         logo: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4543988.jpg'
//     }
// ];
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
