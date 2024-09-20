import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDisplayComponent } from './role-display.component';

describe('RoleDisplayComponent', () => {
  let component: RoleDisplayComponent;
  let fixture: ComponentFixture<RoleDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
