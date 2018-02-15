import { Proceso } from './proceso.model';
import { Periodo } from './periodo.model';
import { EventEmitter } from '@angular/core';

export class ProcesosService {
  constructor() { }
  emPeriodChanged = new EventEmitter<Periodo[]>();
private procesos: Proceso[] = [
  new Proceso(0, 'Proceso 1'),
  new Proceso(1, 'Proceso 2')
];
private globProcesos: Proceso[] = [];
private globPeriodos: Periodo[] = [];
private empPeriodos: Periodo[] = [];
private empPeProcesos: Proceso[] = [];
getProcesos() {
 return this.procesos.slice();
}
setEmpPeriods( id: string, year: string, estatus: string, IdEmp: string, mes: string, concurrente: string) {
  this.empPeriodos.push({id: id, Year: year, Estatus: estatus, IdEmpresaUsuario: IdEmp, Mes: mes, concurrente: concurrente});
  this.emPeriodChanged.emit(this.empPeriodos.slice());
}
getEmpPeriods() {
  console.log(this.empPeriodos);
  return this.empPeriodos.slice();
}
// setglobProcesos() {
//   this.globProcesos.push({});
// }
// getglobProcesos() {
//   return this.globProcesos.slice();
// }
// setglobPeriodos( id: string, year: string, estatus: string, IdEmp: string, mes: string, concurrente: string) {
//   this.globPeriodos.push({id: id, Year: year, Estatus: estatus, IdEmpresaUsuario: IdEmp, Mes: mes, concurrente: concurrente});
// }
// getglobPeriodos() {
//   return this.globPeriodos.slice();
// }
// setempPeProcesos() {
//   this.empPeProcesos.push({});
// }
// getempPeProcesos() {
//   return this.empPeProcesos.slice();
// }

}
