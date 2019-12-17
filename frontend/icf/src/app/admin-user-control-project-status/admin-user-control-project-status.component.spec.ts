import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserControlProjectStatusComponent } from './admin-user-control-project-status.component';

describe('AdminUserControlProjectStatusComponent', () => {
  let component: AdminUserControlProjectStatusComponent;
  let fixture: ComponentFixture<AdminUserControlProjectStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserControlProjectStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserControlProjectStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
