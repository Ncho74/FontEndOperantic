import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavitesComponent } from './my-favites.component';

describe('MyFavitesComponent', () => {
  let component: MyFavitesComponent;
  let fixture: ComponentFixture<MyFavitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFavitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFavitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
