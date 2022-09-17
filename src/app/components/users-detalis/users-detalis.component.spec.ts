import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDetalisComponent } from './users-detalis.component';

describe('UsersDetalisComponent', () => {
  let component: UsersDetalisComponent;
  let fixture: ComponentFixture<UsersDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDetalisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
