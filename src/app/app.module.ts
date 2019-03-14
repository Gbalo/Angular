import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { YoutubeserviceService } from './youtubeservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { UiSwitchModule } from 'ngx-toggle-switch';



const routes: Routes = [
  {
    path: 'channel',
    component: ChannelComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  },
  {
    path: 'addchannel',
    component: AddchannelComponent
  },
  {
    path: 'addvideo',
    component: AddvideoComponent
  }
];
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelComponent } from './channel/channel.component';
import { VideosComponent } from './videos/videos.component';
import { AddchannelComponent } from './addchannel/addchannel.component';
import { AddvideoComponent } from './addvideo/addvideo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {CustomMaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    VideosComponent,
    AddchannelComponent,
    AddvideoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
	UiSwitchModule,
	YoutubePlayerModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    // CustomMaterialModule,
    SlimLoadingBarModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [YoutubeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
