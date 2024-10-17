import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarsDomainComponent } from './cars-domain.component';

describe('CarsDomainComponent', () => {
  let component: CarsDomainComponent;
  let fixture: ComponentFixture<CarsDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsDomainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarsDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
