import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectControlDetailsComponent } from './admin-project-control-details.component';

describe('AdminProjectControlDetailsComponent', () => {
  let component: AdminProjectControlDetailsComponent;
  let fixture: ComponentFixture<AdminProjectControlDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProjectControlDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectControlDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
