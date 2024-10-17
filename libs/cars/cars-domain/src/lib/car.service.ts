import { Injectable } from '@angular/core';
import { CarModel } from './car.model';
import { EXAMPLE_CARS } from './example-cars.const';

@Injectable({ providedIn: 'root' })
export class CarService {
  private cars: CarModel[] = EXAMPLE_CARS;

  public getAll(): CarModel[] {
    return this.cars;
  }

  public add(car: CarModel): void {
    this.cars.unshift(car);
  }
}
