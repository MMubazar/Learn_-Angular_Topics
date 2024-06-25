import { Component } from '@angular/core';
import { PostsDataService } from '../../services/posts-data.service';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrl: './custom-pipes.component.scss',
})
export class CustomPipesComponent {
  public name: string = 'muhammad mubazar qureshi';
  public posts: any = [];

  constructor(private postService: PostsDataService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((data: any) => {
      this.posts = data;
    });
  }
}
