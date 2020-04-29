import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA99Component } from './comp-a99.component';

describe('CompA99Component', () => {
  let component: CompA99Component;
  let fixture: ComponentFixture<CompA99Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA99Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
