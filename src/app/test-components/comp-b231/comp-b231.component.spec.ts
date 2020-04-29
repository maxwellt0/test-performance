import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB231Component } from './comp-b231.component';

describe('CompB231Component', () => {
  let component: CompB231Component;
  let fixture: ComponentFixture<CompB231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
