import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideUsrComponent } from './aside-usr.component';

describe('AsideUsrComponent', () => {
  let component: AsideUsrComponent;
  let fixture: ComponentFixture<AsideUsrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideUsrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
