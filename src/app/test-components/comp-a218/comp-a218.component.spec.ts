import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA218Component } from './comp-a218.component';

describe('CompA218Component', () => {
  let component: CompA218Component;
  let fixture: ComponentFixture<CompA218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA218Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
