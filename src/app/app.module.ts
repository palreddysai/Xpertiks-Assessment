import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumComponent } from './album/album.component';
import { MaterialModule } from './material/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    CommentsComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgImageFullscreenViewModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
