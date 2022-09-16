import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePanelComponent } from './sample-panel.component';

describe('SamplePanelComponent', () => {
  let component: SamplePanelComponent;
  let fixture: ComponentFixture<SamplePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
