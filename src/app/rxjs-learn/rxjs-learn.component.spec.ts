import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsLearnComponent } from './rxjs-learn.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('RxjsLearnComponent', () => {
  let component: RxjsLearnComponent;
  let fixture: ComponentFixture<RxjsLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsLearnComponent,CommonModule,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
