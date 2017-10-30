import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = "Video List"
  currentTime;
  videoList = [
    {
      name: "Video Item1",
      slug: "video-item1",
      embed: "1GnMB9ge6tg"
    },
    {
      name: "Video Item2",
      slug: "video-item2",
      embed: "htPYk6QxacQ"
    },
    {
      name: "Video Item3",
      slug: "video-item3",
      embed: "KhzGSHNhnbI"
    },
    {
      name: "Video Item4",
      slug: "",
      embed: null
    }
  ]
  constructor() { }

  ngOnInit() {
    this.currentTime = new Date()
  }

  getEmbedUrl(item) {
    return "https://www.youtube.com/embed/" + item.embed + "?ecver=2"
  }

}
