import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { ServerService } from '../shared/server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
valid = true;
dummy = [{
        email: 'e@e.com',
        password: 2
        }];
  constructor(private server: ServerService, private router: Router) { }

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
    console.log('entrada');
    console.log(res.token);
    this.router.navigate(['/home/' + res.firstLogin]);
  }
  onError(error) {
    // Notificar error y reiniciar el form
    console.log(error);
  }

}
