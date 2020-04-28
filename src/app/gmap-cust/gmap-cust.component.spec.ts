import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmapCustComponent } from './gmap-cust.component';

describe('GmapCustComponent', () => {
  let component: GmapCustComponent;
  let fixture: ComponentFixture<GmapCustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmapCustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmapCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
