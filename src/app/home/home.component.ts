import { Component, OnInit } from '@angular/core';
import { HeaderHandler } from '../shared/header.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
pwset = false;
 selected: number;
 pwdI: any;
  constructor(private hHandler: HeaderHandler, private route: ActivatedRoute) {
    this.hHandler.moduloSelect.subscribe(
      (id: number) => this.selected = id
    );
   }

  ngOnInit() {
    this.pwdI = this.route.snapshot.params['first'];
    if (typeof this.pwdI !== 'string') {
      alert('error');
    }
    if (this.pwdI === '1') {
      console.log(this.route.snapshot.params['first']);
    }
    if (this.pwdI === '0') {
      // desplegar modal para cambio de contraseña
    }
    // this.selected = 1;
  }

}
