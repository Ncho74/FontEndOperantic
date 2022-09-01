import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefautCitationComponent } from './defaut-citation.component';

describe('DefautCitationComponent', () => {
  let component: DefautCitationComponent;
  let fixture: ComponentFixture<DefautCitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefautCitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefautCitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
