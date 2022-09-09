import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibNgxMrlonisSharedComponent } from './lib-ngx-mrlonis-shared.component';

describe('LibNgxMrlonisSharedComponent', () => {
  let component: LibNgxMrlonisSharedComponent;
  let fixture: ComponentFixture<LibNgxMrlonisSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibNgxMrlonisSharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibNgxMrlonisSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
