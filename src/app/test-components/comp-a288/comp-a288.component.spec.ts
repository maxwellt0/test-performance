import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA288Component } from './comp-a288.component';

describe('CompA288Component', () => {
  let component: CompA288Component;
  let fixture: ComponentFixture<CompA288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
