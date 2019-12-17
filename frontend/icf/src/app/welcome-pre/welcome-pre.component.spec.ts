import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePreComponent } from './welcome-pre.component';

describe('WelcomePreComponent', () => {
  let component: WelcomePreComponent;
  let fixture: ComponentFixture<WelcomePreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomePreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
