import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA242Component } from './comp-a242.component';

describe('CompA242Component', () => {
  let component: CompA242Component;
  let fixture: ComponentFixture<CompA242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA242Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
