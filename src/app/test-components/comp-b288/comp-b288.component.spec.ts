import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB288Component } from './comp-b288.component';

describe('CompB288Component', () => {
  let component: CompB288Component;
  let fixture: ComponentFixture<CompB288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
