import { TestBed } from '@angular/core/testing';
import { CarsFormFeatureComponent } from './cars-form-feature.component';
import { MockProvider, ngMocks } from 'ng-mocks';
import { CarService } from '@org/cars-domain';
import { Router } from '@angular/router';

describe(CarsFormFeatureComponent.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CarsFormFeatureComponent,
        MockProvider(CarService, {
          add: jest.fn(),
        }),
        MockProvider(Router),
      ],
    });
  });

  it('should create', () => {
    const component = TestBed.inject(CarsFormFeatureComponent);

    expect(component).toBeDefined();
  });

  it('submit - should call service.add', () => {
    const component = TestBed.inject(CarsFormFeatureComponent);

    component.submit();

    const service = ngMocks.findInstance(CarService);
    expect(service.add).toHaveBeenCalledTimes(1);
  });
});
