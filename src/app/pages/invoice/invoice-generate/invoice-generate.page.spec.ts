import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvoiceGeneratePage } from './invoice-generate.page';

describe('InvoiceGeneratePage', () => {
  let component: InvoiceGeneratePage;
  let fixture: ComponentFixture<InvoiceGeneratePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceGeneratePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvoiceGeneratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
