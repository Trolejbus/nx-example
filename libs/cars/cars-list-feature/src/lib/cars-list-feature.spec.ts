import { MockBuilder, MockProvider, MockRender } from 'ng-mocks';
import { CarsListSmartComponent } from './cars-list-smart/cars-list-smart.component';
import { CarModel, CarService } from '@org/cars-domain';
import { CarsListDumbComponent } from './cars-list-dumb/cars-list-dumb.component';
import { By } from '@angular/platform-browser';

const MOCKED_CARS: CarModel[] = [
  {
    id: '1',
    brand: 'BMW',
    model: 'I900',
  },
  {
    id: '2',
    brand: 'AUDI',
    model: 'A3',
  },
];

describe('CarsListFeature', () => {
  beforeEach(() => {
    return MockBuilder(CarsListSmartComponent)
      .mock(CarService, {
        getAll: () => MOCKED_CARS,
      })
      .keep(CarsListDumbComponent);
  });

  it('should load entities', () => {
    const fixture = MockRender(CarsListSmartComponent);

    const rows = fixture.debugElement.queryAll(By.css('.row'));

    expect(rows).toHaveLength(2);
  });
});
