import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photos/Sevices/photo.service';
import { HttpEventType } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  totalloaded: number = 0;  //this varriable count the downloading. it will so how much downloaded. 
  title: string;

  constructor(private photosService: PhotoService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe((data) => {
      this.title = data.title;
    });

    this.photosService.getphotos().subscribe((res) => {
      //console.log(res) //display in the console how much download.
      switch (res.type) {
        case HttpEventType.DownloadProgress: //HttpEventType is a event. it's using for how much download your photos data.
          this.totalloaded += res.loaded;
          break;
        case HttpEventType.Response:
          console.log(res.body)
          break;
      }

    })
  }

}
