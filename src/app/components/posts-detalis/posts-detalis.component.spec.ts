import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsDetalisComponent } from './posts-detalis.component';

describe('PostsDetalisComponent', () => {
  let component: PostsDetalisComponent;
  let fixture: ComponentFixture<PostsDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsDetalisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
