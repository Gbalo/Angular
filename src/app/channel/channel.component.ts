import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ChannelServiceService} from "../addchannel/channel-service.service";
import {ChannelModel} from "../addchannel/channel.model";


@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.styl']
})
export class ChannelComponent implements OnInit {

  channels: ChannelModel[];
	filterData : ChannelModel[];
  constructor(private router: Router, private channelService: ChannelServiceService) { }

  ngOnInit() {
	 
    this.channelService.getChannels()
      .subscribe( data => {
        this.channels = data;
		this.filterData = data;
      });
  }
  
  clear(){
	  
	  this.channels = this.filterData;
  }
	
	applyFilter(event) {
		var filterValue = event.target.value;
		var data = this.channels.find(x=> x.ChannelName.indexOf(filterValue) >-1)
		this.channels = data;
		
	}
  deleteChannel(channel: ChannelModel): void {
	  
    this.channelService.deleteChannel(channel.ChannelId)
      .subscribe( data => {
        this.channels = this.channels.filter(u => u !== channel);
      })
  };

  editChannel(channel: ChannelModel): void {
	  debugger
    let isActive = channel.isChannelActive;
    if(isActive == 1) channel.isChannelActive =0;
    if(isActive == 0) channel.isChannelActive = 1;
    this.channelService.updateChannel(channel)
      .subscribe( data => {
        alert('You Just Deactivate channel');
      })
  };

  addChannel(): void {
    this.router.navigate(['addchannel']);
  };

}
