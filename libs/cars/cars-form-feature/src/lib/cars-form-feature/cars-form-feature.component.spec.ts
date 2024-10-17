import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarsFormFeatureComponent } from './cars-form-feature.component';

describe('CarsFormFeatureComponent', () => {
  let component: CarsFormFeatureComponent;
  let fixture: ComponentFixture<CarsFormFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsFormFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarsFormFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
