import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaItemComponent } from './empresa-item.component';

describe('EmpresaItemComponent', () => {
  let component: EmpresaItemComponent;
  let fixture: ComponentFixture<EmpresaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
