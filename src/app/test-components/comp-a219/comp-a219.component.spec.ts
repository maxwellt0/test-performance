import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA219Component } from './comp-a219.component';

describe('CompA219Component', () => {
  let component: CompA219Component;
  let fixture: ComponentFixture<CompA219Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA219Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
