import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBanditComponent } from './input-bandit.component';

describe('InputBanditComponent', () => {
  let component: InputBanditComponent;
  let fixture: ComponentFixture<InputBanditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBanditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBanditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
