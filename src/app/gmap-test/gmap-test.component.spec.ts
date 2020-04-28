import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmapTestComponent } from './gmap-test.component';

describe('GmapTestComponent', () => {
  let component: GmapTestComponent;
  let fixture: ComponentFixture<GmapTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmapTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmapTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
