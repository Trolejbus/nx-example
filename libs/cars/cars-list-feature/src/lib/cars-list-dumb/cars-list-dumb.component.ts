import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarModel } from '@org/cars-domain';

@Component({
  selector: 'lib-cars-list-dumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars-list-dumb.component.html',
  styleUrl: './cars-list-dumb.component.css',
})
export class CarsListDumbComponent {
  public cars = input.required<CarModel[]>();
}
