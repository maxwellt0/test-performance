import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB65Component } from './comp-b65.component';

describe('CompB65Component', () => {
  let component: CompB65Component;
  let fixture: ComponentFixture<CompB65Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB65Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
