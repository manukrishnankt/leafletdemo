import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapserverComponent } from './mapserver.component';

describe('MapserverComponent', () => {
  let component: MapserverComponent;
  let fixture: ComponentFixture<MapserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
