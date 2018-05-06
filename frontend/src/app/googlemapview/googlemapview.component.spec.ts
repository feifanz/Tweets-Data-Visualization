import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglemapviewComponent } from './googlemapview.component';

describe('GooglemapviewComponent', () => {
  let component: GooglemapviewComponent;
  let fixture: ComponentFixture<GooglemapviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglemapviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglemapviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
