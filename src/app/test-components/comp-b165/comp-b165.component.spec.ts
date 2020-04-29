import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB165Component } from './comp-b165.component';

describe('CompB165Component', () => {
  let component: CompB165Component;
  let fixture: ComponentFixture<CompB165Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB165Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
