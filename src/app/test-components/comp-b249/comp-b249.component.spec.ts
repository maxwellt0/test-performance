import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB249Component } from './comp-b249.component';

describe('CompB249Component', () => {
  let component: CompB249Component;
  let fixture: ComponentFixture<CompB249Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB249Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
