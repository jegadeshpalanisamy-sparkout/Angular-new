import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsOrganizationComponent } from './about-us-organization.component';

describe('AboutUsOrganizationComponent', () => {
  let component: AboutUsOrganizationComponent;
  let fixture: ComponentFixture<AboutUsOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsOrganizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
