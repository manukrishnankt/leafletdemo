import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsriPluginComponent } from './esri-plugin.component';

describe('EsriPluginComponent', () => {
  let component: EsriPluginComponent;
  let fixture: ComponentFixture<EsriPluginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsriPluginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsriPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
