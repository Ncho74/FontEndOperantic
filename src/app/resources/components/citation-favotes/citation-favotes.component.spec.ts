import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationFavotesComponent } from './citation-favotes.component';

describe('CitationFavotesComponent', () => {
  let component: CitationFavotesComponent;
  let fixture: ComponentFixture<CitationFavotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitationFavotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitationFavotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
