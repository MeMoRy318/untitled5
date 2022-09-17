import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetalisComponent } from './user-detalis.component';

describe('UserDetalisComponent', () => {
  let component: UserDetalisComponent;
  let fixture: ComponentFixture<UserDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetalisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
