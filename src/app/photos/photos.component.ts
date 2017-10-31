import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http }                         from '@angular/http';

import { PhotoService }                 from '../services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers: [PhotoService]
})

export class PhotosComponent implements OnInit {
  private req: any;
  photoList;
  constructor(private http: Http, private _photo: PhotoService) { }

  ngOnInit() {
    this.req = this._photo.list(10).subscribe( data => {
      console.log(data);
      this.photoList = data;
    });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

}
