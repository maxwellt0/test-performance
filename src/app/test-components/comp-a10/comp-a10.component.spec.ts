import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA10Component } from './comp-a10.component';

describe('CompA10Component', () => {
  let component: CompA10Component;
  let fixture: ComponentFixture<CompA10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
