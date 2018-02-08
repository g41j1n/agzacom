import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContUsrComponent } from './cont-usr.component';

describe('ContUsrComponent', () => {
  let component: ContUsrComponent;
  let fixture: ComponentFixture<ContUsrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContUsrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
