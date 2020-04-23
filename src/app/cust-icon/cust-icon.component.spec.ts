import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustIconComponent } from './cust-icon.component';

describe('CustIconComponent', () => {
  let component: CustIconComponent;
  let fixture: ComponentFixture<CustIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
