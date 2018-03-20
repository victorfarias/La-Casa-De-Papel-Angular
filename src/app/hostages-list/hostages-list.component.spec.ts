import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostagesListComponent } from './hostages-list.component';

describe('HostagesListComponent', () => {
  let component: HostagesListComponent;
  let fixture: ComponentFixture<HostagesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostagesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
