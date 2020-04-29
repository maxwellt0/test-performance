import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA112Component } from './comp-a112.component';

describe('CompA112Component', () => {
  let component: CompA112Component;
  let fixture: ComponentFixture<CompA112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
