import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB121Component } from './comp-b121.component';

describe('CompB121Component', () => {
  let component: CompB121Component;
  let fixture: ComponentFixture<CompB121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
