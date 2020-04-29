import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA272Component } from './comp-a272.component';

describe('CompA272Component', () => {
  let component: CompA272Component;
  let fixture: ComponentFixture<CompA272Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA272Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
