import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfluenceHelpCardComponent } from './confluence-help-card.component';

describe('ConfluenceHelpCardComponent', () => {
  let component: ConfluenceHelpCardComponent;
  let fixture: ComponentFixture<ConfluenceHelpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfluenceHelpCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfluenceHelpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
