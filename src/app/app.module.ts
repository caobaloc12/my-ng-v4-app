import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

//third party imports
import { BsDropdownModule }     from 'ngx-bootstrap/dropdown';
import { ModalModule }          from 'ngx-bootstrap/modal';

import { AppComponent }         from './app.component';
import { HomeComponent }     from './home/home.component';
import { AppRoutingModule }     from './app.routing';
import { VideoListComponent }   from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { SafeEmbedPipe }        from './utility/safe-embed.pipe';
import { PhotosComponent } from './photos/photos.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailComponent,
    SafeEmbedPipe,
    HomeComponent,
    PhotosComponent,
    SearchComponent,
    SearchResultComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),

    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
