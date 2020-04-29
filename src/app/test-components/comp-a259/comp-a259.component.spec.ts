import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA259Component } from './comp-a259.component';

describe('CompA259Component', () => {
  let component: CompA259Component;
  let fixture: ComponentFixture<CompA259Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA259Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
