import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { RedditService } from './services/reddit.service';

import { MaterialModules } from './components/material/material-modules';

@NgModule({
  declarations: [AppComponent, PostComponent, PostListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModules
  ],
  providers: [RedditService],
  bootstrap: [AppComponent]
})
export class AppModule {}
