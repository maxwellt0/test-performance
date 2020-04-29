import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA154Component } from './comp-a154.component';

describe('CompA154Component', () => {
  let component: CompA154Component;
  let fixture: ComponentFixture<CompA154Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA154Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
