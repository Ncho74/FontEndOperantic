import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefautBioAutorComponent } from './defaut-bio-autor.component';

describe('DefautBioAutorComponent', () => {
  let component: DefautBioAutorComponent;
  let fixture: ComponentFixture<DefautBioAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefautBioAutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefautBioAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
