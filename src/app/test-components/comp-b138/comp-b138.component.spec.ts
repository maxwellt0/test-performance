import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB138Component } from './comp-b138.component';

describe('CompB138Component', () => {
  let component: CompB138Component;
  let fixture: ComponentFixture<CompB138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
