import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideProComponent } from './aside-pro.component';

describe('AsideProComponent', () => {
  let component: AsideProComponent;
  let fixture: ComponentFixture<AsideProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
