import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA162Component } from './comp-a162.component';

describe('CompA162Component', () => {
  let component: CompA162Component;
  let fixture: ComponentFixture<CompA162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
