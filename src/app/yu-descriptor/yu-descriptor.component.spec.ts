import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YuDescriptorComponent } from './yu-descriptor.component';

describe('YuDescriptorComponent', () => {
  let component: YuDescriptorComponent;
  let fixture: ComponentFixture<YuDescriptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YuDescriptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YuDescriptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
