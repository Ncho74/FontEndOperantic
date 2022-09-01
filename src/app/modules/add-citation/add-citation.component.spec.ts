import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCitationComponent } from './add-citation.component';

describe('AddCitationComponent', () => {
  let component: AddCitationComponent;
  let fixture: ComponentFixture<AddCitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
