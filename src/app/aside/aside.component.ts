import { Component, OnInit } from '@angular/core';
import { HeaderHandler } from '../shared/header.service';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
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
