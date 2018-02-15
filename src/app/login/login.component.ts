import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { ServerService } from '../shared/server.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Empresa } from '../shared/empresa.model';
import { EmpresasService } from '../shared/empresas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
valid = true;
private empresas: Empresa[];
  constructor(private server: ServerService,
              private router: Router,
              private authService: AuthService,
              private empresasService: EmpresasService
            ) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    // console.log(form);
    this.server.loginServer(form.value).subscribe(
      (res: Response) => {
        const data = res.json();
        // console.log(data);
        if (data.responseCode === '0' || data.responseCode === '00') {
         this.onValidation(data);
        }
        if (data.responseCode === '2') {
          // alert error de usuario y contraseña y reseteo de form
          console.log(data);
        } else {
          this.onError(data);
        }
      },
      (error) => this.onError(error)
    );
  }
  onValidation(res) {
    // console.log('entrada');
    // console.log(res);
    const emp = res.listCompanies;
    emp.map(
      (ele) => {
        this.empresasService.addEmpresa(ele.idEmpresaUsuario, ele.nombreEmpresa,  ele.Rfc, ele.urlLogo);
      });
    sessionStorage.setItem('token', res.token);
    sessionStorage.setItem('name', res.name);
    sessionStorage.setItem('email', res.email);
    this.authService.login();
    this.router.navigate(['/home/' + res.firstLogin]);
  }
  onError(error) {
    // Notificar error y reiniciar el form
    console.log(error);
  }

}
