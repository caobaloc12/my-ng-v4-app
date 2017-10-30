import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http }                         from '@angular/http';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  private req: any
  photoList;
  constructor(private http:Http) { }

  ngOnInit() {
    this.req = this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe( data => {
      this.photoList = data.json().slice(0, 12)
      console.log(this.photoList)
    })
  }

  ngOnDestroy() {
    this.req.unsubscribe()
  }

}
