import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { HomeComponent }          from './home/home.component';
import { VideoListComponent }     from './video-list/video-list.component';
import { VideoDetailComponent }   from './video-detail/video-detail.component';
import { PhotosComponent }        from './photos/photos.component';
import { SearchResultComponent }        from './search-result/search-result.component';

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "search",
    component: SearchResultComponent,
  },
  {
    path: "videos",
    component: VideoListComponent,
  },
  {
    path: "videos/:slug",
    component: VideoDetailComponent,
  },
  {
    path: "photos",
    component: PhotosComponent,
  },
]


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
