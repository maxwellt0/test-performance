import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB107Component } from './comp-b107.component';

describe('CompB107Component', () => {
  let component: CompB107Component;
  let fixture: ComponentFixture<CompB107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
