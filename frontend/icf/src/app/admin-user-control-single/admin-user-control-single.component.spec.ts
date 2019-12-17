import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserControlSingleComponent } from './admin-user-control-single.component';

describe('AdminUserControlSingleComponent', () => {
  let component: AdminUserControlSingleComponent;
  let fixture: ComponentFixture<AdminUserControlSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserControlSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserControlSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
