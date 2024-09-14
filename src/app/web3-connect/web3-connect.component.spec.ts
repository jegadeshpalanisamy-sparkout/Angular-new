import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Web3ConnectComponent } from './web3-connect.component';

describe('Web3ConnectComponent', () => {
  let component: Web3ConnectComponent;
  let fixture: ComponentFixture<Web3ConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Web3ConnectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Web3ConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
