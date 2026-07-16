import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleBasedLoginComponent } from './role-based-login.component';

describe('RoleBasedLoginComponent', () => {
  let component: RoleBasedLoginComponent;
  let fixture: ComponentFixture<RoleBasedLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleBasedLoginComponent]
    });
    fixture = TestBed.createComponent(RoleBasedLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
