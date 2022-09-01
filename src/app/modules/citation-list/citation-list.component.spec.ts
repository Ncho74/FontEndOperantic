import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationListComponent } from './citation-list.component';

describe('CitationListComponent', () => {
  let component: CitationListComponent;
  let fixture: ComponentFixture<CitationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
