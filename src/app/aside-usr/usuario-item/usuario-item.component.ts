import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/usuario.model';
import { UsuariosService } from '../../shared/usuarios.service';
@Component({
  selector: 'app-usuario-item',
  templateUrl: './usuario-item.component.html',
  styleUrls: ['./usuario-item.component.css'],
  providers: [UsuariosService]
})
export class UsuarioItemComponent implements OnInit {

  usuarios: Usuario[];
  constructor(private usrSrv: UsuariosService) { }

  ngOnInit() {
    this.usuarios = this.usrSrv.getUsuarios();
  }
  onSelectUser(id) {
    console.log(id);
  }


}
