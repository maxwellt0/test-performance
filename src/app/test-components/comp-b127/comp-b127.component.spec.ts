import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB127Component } from './comp-b127.component';

describe('CompB127Component', () => {
  let component: CompB127Component;
  let fixture: ComponentFixture<CompB127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
