import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeComponent } from './stripe.component';
import { CommonModule } from '@angular/common';

describe('StripeComponent', () => {
  let component: StripeComponent;
  let fixture: ComponentFixture<StripeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StripeComponent,CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
