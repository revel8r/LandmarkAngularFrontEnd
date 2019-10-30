import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataServerComponent } from './data-server.component';

describe('DataServerComponent', () => {
  let component: DataServerComponent;
  let fixture: ComponentFixture<DataServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
