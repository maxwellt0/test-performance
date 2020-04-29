import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA68Component } from './comp-a68.component';

describe('CompA68Component', () => {
  let component: CompA68Component;
  let fixture: ComponentFixture<CompA68Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA68Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
