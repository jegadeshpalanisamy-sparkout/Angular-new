import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsCompanyComponent } from './about-us-company.component';

describe('AboutUsCompanyComponent', () => {
  let component: AboutUsCompanyComponent;
  let fixture: ComponentFixture<AboutUsCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
