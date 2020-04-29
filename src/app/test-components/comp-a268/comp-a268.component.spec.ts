import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA268Component } from './comp-a268.component';

describe('CompA268Component', () => {
  let component: CompA268Component;
  let fixture: ComponentFixture<CompA268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA268Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
