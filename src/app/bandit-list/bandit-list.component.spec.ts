import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanditListComponent } from './bandit-list.component';

describe('BanditListComponent', () => {
  let component: BanditListComponent;
  let fixture: ComponentFixture<BanditListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanditListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
