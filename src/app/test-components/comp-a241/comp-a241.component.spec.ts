import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA241Component } from './comp-a241.component';

describe('CompA241Component', () => {
  let component: CompA241Component;
  let fixture: ComponentFixture<CompA241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
