import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA97Component } from './comp-a97.component';

describe('CompA97Component', () => {
  let component: CompA97Component;
  let fixture: ComponentFixture<CompA97Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA97Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA97Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
