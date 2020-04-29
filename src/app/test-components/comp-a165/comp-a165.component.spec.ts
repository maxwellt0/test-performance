import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA165Component } from './comp-a165.component';

describe('CompA165Component', () => {
  let component: CompA165Component;
  let fixture: ComponentFixture<CompA165Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA165Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
