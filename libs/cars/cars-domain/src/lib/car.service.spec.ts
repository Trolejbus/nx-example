import { CarService } from './car.service';
import { TestBed } from '@angular/core/testing';

describe(CarService.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarService],
    });
  });

  it('should create', () => {
    const service = TestBed.inject(CarService);

    expect(service).toBeDefined();
  });

  it('should add services', () => {
    const CAR = { id: '1', brand: 'testBrand', model: 'testModel' };
    const service = TestBed.inject(CarService);

    service.add(CAR);

    expect(service.getAll()).toContain(CAR);
  });
});
