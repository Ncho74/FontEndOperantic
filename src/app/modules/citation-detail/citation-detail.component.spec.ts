import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationDetailComponent } from './citation-detail.component';

describe('CitationDetailComponent', () => {
  let component: CitationDetailComponent;
  let fixture: ComponentFixture<CitationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitationDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
