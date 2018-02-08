import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideEmpComponent } from './aside-emp.component';

describe('AsideEmpComponent', () => {
  let component: AsideEmpComponent;
  let fixture: ComponentFixture<AsideEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
