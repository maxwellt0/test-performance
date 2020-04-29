import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB160Component } from './comp-b160.component';

describe('CompB160Component', () => {
  let component: CompB160Component;
  let fixture: ComponentFixture<CompB160Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB160Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
