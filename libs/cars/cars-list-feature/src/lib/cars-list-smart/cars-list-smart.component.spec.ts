import { CarService } from '@org/cars-domain';
import { CarsListSmartComponent } from './cars-list-smart.component';
import { TestBed } from '@angular/core/testing';
import { MockProvider, ngMocks } from 'ng-mocks';

describe(CarsListSmartComponent.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CarsListSmartComponent,
        MockProvider(CarService, { getAll: jest.fn() }),
      ],
    });
  });

  it('should create', () => {
    const component = TestBed.inject(CarsListSmartComponent);

    expect(component).toBeDefined();
  });

  it('should call service', () => {
    const component = TestBed.inject(CarsListSmartComponent);

    const service = ngMocks.findInstance(CarService);
    expect(service.getAll).toHaveBeenCalledTimes(1);
  });
});
