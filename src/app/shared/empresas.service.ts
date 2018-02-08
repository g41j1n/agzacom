import { EventEmitter } from '@angular/core';

export class EmpresasService {
 empresas = [
     {
         id: 1,
        name: 'Nombre Empresa',
        status: 'Proceso Activo',
        logo: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4543988.jpg'
     },
     {
        id: 2,
       name: 'Nombre 2',
       status: 'Proceso Activo',
       logo: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4543988.jpg'
    }
 ];
 addEmpresa( name: string, status: string, logo: string ) {
    this.empresas.push({id: 3, name: name, status: status, logo: logo});
 }
 editEmpresa(id: number, name: string, status: string, logo: string) {
    this.empresas[id].name = name;
    this.empresas[id].status = status;
    this.empresas[id].logo = logo;

 }
 delEmpresa(id: number) {

 }
 empresaSelect = new EventEmitter<{id: number, name: string, status: string, logo: string}>();
}
