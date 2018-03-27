import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanditPageComponent } from './bandit-page.component';

describe('BanditPageComponent', () => {
  let component: BanditPageComponent;
  let fixture: ComponentFixture<BanditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
