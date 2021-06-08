import { Component, OnInit } from '@angular/core';
import { Comments } from '../models/comments';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comments[] = [];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getComments().subscribe(
      (res) => {
        this.comments = res;
        console.log(this.comments);
      }
    )
  }

}
