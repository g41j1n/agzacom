import { Component, OnInit } from '@angular/core';
import { HeaderHandler } from '../shared/header.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 selected: number;
  constructor(private hHandler: HeaderHandler) {
    this.hHandler.moduloSelect.subscribe(
      (id: number) => this.selected = id
    );
   }

  ngOnInit() {
    // this.selected = 1;
  }

}
