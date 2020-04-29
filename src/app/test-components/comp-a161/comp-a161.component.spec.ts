import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA161Component } from './comp-a161.component';

describe('CompA161Component', () => {
  let component: CompA161Component;
  let fixture: ComponentFixture<CompA161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
