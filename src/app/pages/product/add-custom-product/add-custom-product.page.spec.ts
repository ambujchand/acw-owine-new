import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCustomProductPage } from './add-custom-product.page';

describe('AddCustomProductPage', () => {
  let component: AddCustomProductPage;
  let fixture: ComponentFixture<AddCustomProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCustomProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCustomProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
