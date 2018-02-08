import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContEmpComponent } from './cont-emp.component';

describe('ContEmpComponent', () => {
  let component: ContEmpComponent;
  let fixture: ComponentFixture<ContEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
