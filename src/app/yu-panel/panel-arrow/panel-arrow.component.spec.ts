import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelArrowComponent } from './panel-arrow.component';

describe('PanelArrowComponent', () => {
  let component: PanelArrowComponent;
  let fixture: ComponentFixture<PanelArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
