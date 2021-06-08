import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { Posts } from '../models/posts';
import { Comments } from '../models/comments';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:Posts[] = [];
comments:Comments[] = []
show:boolean = false;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getPosts().subscribe(
      (res) => {
        this.posts = res;
        console.log("posts",this.posts);
      }
    )
    }

  showcomments(){
    this.show = !this.show;
    this.commonService.getComments().subscribe(res =>{
    this.comments = res;
      console.log("comments",this.comments);
    }
    )

 }

}
