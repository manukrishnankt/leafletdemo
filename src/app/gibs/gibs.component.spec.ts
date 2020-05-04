import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GibsComponent } from './gibs.component';

describe('GibsComponent', () => {
  let component: GibsComponent;
  let fixture: ComponentFixture<GibsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GibsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
