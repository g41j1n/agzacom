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
uName: string;
  constructor( private hHandler: HeaderHandler, private server: ServerService, private router: Router) { }

  ngOnInit() {
    this.uName = sessionStorage.getItem('name');
  }
  selectModule(mod: number) {
    this.hHandler.moduloSelect.emit(mod);
    this.active = mod;
  }
  onLogout() {
    this.server.logoutServer(sessionStorage.getItem('token')).subscribe(
      (res: Response)  => {
        const data = res.json();
        if (data.responseCode === '00') {
          // mostrar mensaje de salida
          sessionStorage.clear();
          this.router.navigate(['/']);
        } else {
          // mostrar mensaje de error
        }
      },
      (error) => console.log(error)
    );
  }
  onSelectPwd() {
    console.log('modal de password');
  }
}
