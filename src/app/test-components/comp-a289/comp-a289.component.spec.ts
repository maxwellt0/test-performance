import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA289Component } from './comp-a289.component';

describe('CompA289Component', () => {
  let component: CompA289Component;
  let fixture: ComponentFixture<CompA289Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA289Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
