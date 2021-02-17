import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrentInventoryPage } from './current-inventory.page';

describe('CurrentInventoryPage', () => {
  let component: CurrentInventoryPage;
  let fixture: ComponentFixture<CurrentInventoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentInventoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentInventoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
