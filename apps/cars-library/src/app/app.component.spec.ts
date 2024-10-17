import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppComponent],
    });
  });

  it('should create', () => {
    const component = TestBed.inject(AppComponent);

    expect(component).toBeDefined();
  });
});
