import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA129Component } from './comp-a129.component';

describe('CompA129Component', () => {
  let component: CompA129Component;
  let fixture: ComponentFixture<CompA129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA129Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
