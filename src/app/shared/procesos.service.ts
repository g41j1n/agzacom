import { Proceso } from './proceso.model';

export class ProcesosService {
  constructor() { }
private procesos: Proceso[] = [
  new Proceso(0, 'Proceso 1'),
  new Proceso(1, 'Proceso 2')
];
getProcesos() {
 return this.procesos.slice();
}

}
