import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CarService } from '@org/cars-domain';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-cars-list',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css',
})
export class CarsListFeatureComponent {
  private service = inject(CarService);

  public cars$ = this.service.getAll();
}
