import { Component, OnInit } from '@angular/core';
import { HeaderHandler } from '../shared/header.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
active: number;
  constructor( private hHandler: HeaderHandler) { }

  ngOnInit() {
  }
  selectModule(mod: number) {
    this.hHandler.moduloSelect.emit(mod);
    this.active = mod;
  }
}
