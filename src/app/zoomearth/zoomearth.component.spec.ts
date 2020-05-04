import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomearthComponent } from './zoomearth.component';

describe('ZoomearthComponent', () => {
  let component: ZoomearthComponent;
  let fixture: ComponentFixture<ZoomearthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomearthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomearthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
