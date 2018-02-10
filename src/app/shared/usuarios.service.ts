import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
@Injectable()
export class UsuariosService {

  constructor() { }
  private usuarios: Usuario[] = [
    new Usuario(1, 'Usuario', 'Email@email.com', 'password', 'Contador' ),
    new Usuario(2, 'Usuario-2', 'Email@email.com', 'password', 'Contador' ),
    new Usuario(3, 'Usuario-3', 'Email@email.com', 'password', 'Contador' ),
    new Usuario(4, 'Usuario-4', 'Email@email.com', 'password', 'Contador' ),
  ];
  getUsuarios() {
    return this.usuarios.slice();
  }

}


