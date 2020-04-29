import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB259Component } from './comp-b259.component';

describe('CompB259Component', () => {
  let component: CompB259Component;
  let fixture: ComponentFixture<CompB259Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB259Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
