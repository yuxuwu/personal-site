import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YuPanelComponent } from './yu-panel.component';

describe('YuPanelComponent', () => {
  let component: YuPanelComponent;
  let fixture: ComponentFixture<YuPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YuPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
