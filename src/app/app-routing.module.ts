import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path:"", redirectTo:"/posts", pathMatch:"full"},
  {path:"posts",component:PostsComponent},
  {path:"comments",component:CommentsComponent},
  {path:"album",component:AlbumComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
