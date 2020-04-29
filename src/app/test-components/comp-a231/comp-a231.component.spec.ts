import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA231Component } from './comp-a231.component';

describe('CompA231Component', () => {
  let component: CompA231Component;
  let fixture: ComponentFixture<CompA231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
