import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContProComponent } from './cont-pro.component';

describe('ContProComponent', () => {
  let component: ContProComponent;
  let fixture: ComponentFixture<ContProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
