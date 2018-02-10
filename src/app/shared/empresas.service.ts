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
private empresas: Empresa[] = [
    new Empresa(
        1,
        'Nombre empresa',
        'Nombre Proceso',
        'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4543988.jpg'
    ),
    new Empresa(
        2,
        'Empresa 2',
        'Proceso 2',
        'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4543988.jpg'
    ),
];
empresaSelect = new EventEmitter<{id: number, name: string, status: string, logo: string}>();
 addEmpresa( name: string, status: string, logo: string ) {
    this.empresas.push({id: 3, name: name, status: status, logo: logo});
 }
 editEmpresa(id: number, name: string, status: string, logo: string) {
    this.empresas[id].name = name;
    this.empresas[id].status = status;
    this.empresas[id].logo = logo;

 }
 delEmpresa(id: number) {
 console.log(id);
 }
 getEmpresas() {
    return this.empresas.slice();
 }
}
