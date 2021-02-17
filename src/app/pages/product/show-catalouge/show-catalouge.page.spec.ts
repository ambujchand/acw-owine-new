import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowCatalougePage } from './show-catalouge.page';

describe('ShowCatalougePage', () => {
  let component: ShowCatalougePage;
  let fixture: ComponentFixture<ShowCatalougePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCatalougePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowCatalougePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
