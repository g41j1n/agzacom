import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { ServerService } from '../shared/server.service';

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
  constructor(private server: ServerService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form);
    this.server.loginServer().subscribe(
      (res: Response) => {
        const data = res.json();
        // console.log(data.message);
        // console.log(data.token);
        console.log(data);
        if (data.responseCode === '0' || data.responseCode === '00') {
         this.onValidation(data);
        }
      },
      (error) => console.log(error)
    );
  }
  onValidation(res) {
    console.log('entrada');
    console.log(res.token);
  }

}
