import { Component, OnInit } from '@angular/core';
import { Photos } from '../models/photos';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  currentIndex: any = -1;
  showFlag: any = false;

  photos:Array<object> = []

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getPhotos().subscribe(
      (res) => {
        this.photos = res;
        console.log(this.photos);
      }
    )
  }
  showLightbox(index) {
    this.currentIndex = index;
    console.log(index)
    this.showFlag = true;
    console.log(this.showFlag)
  }

  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }
}
