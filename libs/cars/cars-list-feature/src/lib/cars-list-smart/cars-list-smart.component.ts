import { Component, inject } from '@angular/core';
import { CarService } from '@org/cars-domain';
import { RouterLink } from '@angular/router';
import { CarsListDumbComponent } from '../cars-list-dumb/cars-list-dumb.component';

@Component({
  selector: 'lib-cars-list-smart',
  standalone: true,
  imports: [RouterLink, CarsListDumbComponent],
  templateUrl: './cars-list-smart.component.html',
  styleUrl: './cars-list-smart.component.css',
})
export class CarsListSmartComponent {
  private service = inject(CarService);

  public cars = this.service.getAll();
}
