import { Component, OnInit } from '@angular/core';
import { HeaderHandler } from '../shared/header.service';
import { ServerService } from '../shared/server.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
active: number;
  constructor( private hHandler: HeaderHandler, private server: ServerService, private router: Router) { }

  ngOnInit() {
  }
  selectModule(mod: number) {
    this.hHandler.moduloSelect.emit(mod);
    this.active = mod;
  }
  onLogout() {
    this.server.logoutServer().subscribe(
      (res: Response)  => {
        console.log(res);
        // Validar la respuesta antes de redirigir
        // this.router.navigate(['/']);
      },
      (error) => console.log(error)
    );
  }
  onSelectPwd() {
    console.log('modal de password');
  }
}
