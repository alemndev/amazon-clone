import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductThumbComponent } from './product-thumb.component';

describe('ProductThumbComponent', () => {
  let component: ProductThumbComponent;
  let fixture: ComponentFixture<ProductThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductThumbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
