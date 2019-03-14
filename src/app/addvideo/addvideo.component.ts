import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { VideoServiceService } from "./video-service.service";
import { ChannelServiceService } from "../addchannel/channel-service.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.styl']
})
export class AddvideoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private videoService: VideoServiceService, private channelService: ChannelServiceService) { }
  channels = [];
  videoForm: FormGroup;

  ngOnInit() {
    this.videoForm = this.formBuilder.group({
      VideoId: [0,''],
      VideoName: ['', Validators.required],
      VideoLink: ['', Validators.required],
      ChannelName: ['', Validators.required],
      ChannelId: ['', Validators.required],
      Category: ['', Validators.required],
      Description: ['', Validators.required]
    });

    this.channelService.getChannels()
      .subscribe(data => {
        this.channels = data;
      });

  }

  onChange(channel): void {
    this.videoForm.controls['ChannelId'].setValue(channel.target.value);
    this.videoForm.controls['ChannelName'].setValue(channel.target.options[event.target.options.selectedIndex].text);
	if(channel.target && channel.target.options){
	}

  }
  onSubmit() {
    this.videoService.createVideo(this.videoForm.value)
      .subscribe(data => {
        this.router.navigate(['videos']);
      });
  }
}
