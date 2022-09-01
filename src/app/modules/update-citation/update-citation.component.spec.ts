import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCitationComponent } from './update-citation.component';

describe('UpdateCitationComponent', () => {
  let component: UpdateCitationComponent;
  let fixture: ComponentFixture<UpdateCitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
