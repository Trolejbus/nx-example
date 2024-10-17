import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '@org/cars-domain';

@Component({
  selector: 'lib-cars-form-feature',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './cars-form-feature.component.html',
  styleUrl: './cars-form-feature.component.css',
})
export class CarsFormFeatureComponent {
  private service = inject(CarService);
  private router = inject(Router);

  public carForm = new FormGroup({
    brand: new FormControl(),
    model: new FormControl(),
  });

  public submit(): void {
    const newCar = {
      id: Math.floor(Math.random() * 100000).toString(),
      ...this.carForm.getRawValue(),
    };

    this.service.add(newCar);
    this.router.navigate(['/list']);
  }
}
