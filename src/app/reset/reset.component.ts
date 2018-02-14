import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from '../shared/server.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(private server: ServerService, private router: Router) { }

  ngOnInit() {
  }
  onReset(form: NgForm) {
    // console.log(form);
    this.server.resetPass(form.value).subscribe(
      (res: Response) => {
        const data = res.json();
        console.log(data.responseCode);
        const rp = data.responseCode;
        if (rp !== '0') {
          this.onError(data);
        } else {
          this.onSuccess(data);
        }
      },
      (err) => console.log(err)
    );

  }
  onSuccess(data) {
    console.log(data.message);
    this.router.navigate(['/']);
  }
  onError(data) {
    console.log(data.message);
  }

}
