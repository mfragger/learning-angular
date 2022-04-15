import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleNewPageComponent } from './sample-new-page.component';

describe('SampleNewPageComponent', () => {
  let component: SampleNewPageComponent;
  let fixture: ComponentFixture<SampleNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleNewPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
