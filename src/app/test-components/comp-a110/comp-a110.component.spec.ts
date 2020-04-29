import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA110Component } from './comp-a110.component';

describe('CompA110Component', () => {
  let component: CompA110Component;
  let fixture: ComponentFixture<CompA110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
