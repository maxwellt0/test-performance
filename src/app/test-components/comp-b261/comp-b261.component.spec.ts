import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB261Component } from './comp-b261.component';

describe('CompB261Component', () => {
  let component: CompB261Component;
  let fixture: ComponentFixture<CompB261Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB261Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
