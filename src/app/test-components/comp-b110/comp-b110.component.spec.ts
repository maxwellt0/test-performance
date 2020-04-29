import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB110Component } from './comp-b110.component';

describe('CompB110Component', () => {
  let component: CompB110Component;
  let fixture: ComponentFixture<CompB110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
