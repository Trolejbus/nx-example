import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarsListFeatureComponent } from './cars-list-feature.component';

describe('CarsListFeatureComponent', () => {
  let component: CarsListFeatureComponent;
  let fixture: ComponentFixture<CarsListFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsListFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarsListFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
