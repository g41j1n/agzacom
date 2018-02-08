import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoItemComponent } from './proceso-item.component';

describe('ProcesoItemComponent', () => {
  let component: ProcesoItemComponent;
  let fixture: ComponentFixture<ProcesoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
