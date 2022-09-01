import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationByAuthorComponent } from './citation-by-author.component';

describe('CitationByAuthorComponent', () => {
  let component: CitationByAuthorComponent;
  let fixture: ComponentFixture<CitationByAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitationByAuthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitationByAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
