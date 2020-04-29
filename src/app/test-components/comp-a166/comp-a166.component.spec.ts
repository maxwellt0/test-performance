import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA166Component } from './comp-a166.component';

describe('CompA166Component', () => {
  let component: CompA166Component;
  let fixture: ComponentFixture<CompA166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
