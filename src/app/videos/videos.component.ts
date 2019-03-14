import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { VideoServiceService } from "../addvideo/video-service.service";
import { VideoModel } from "../addvideo/video.modal";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.styl']
})
export class VideosComponent implements OnInit {
	id :string;
	
  playerVars = {
    cc_lang_pref: 'en'
  };
  private player;
  private ytEvent;

  videos: VideoModel[];
  data: VideoModel[];
  filterData : VideoModel[];
  constructor(private router: Router, private videoService: VideoServiceService,private modalService: NgbModal) { }
  closeResult: string;
	videourl : string;
  ngOnInit() {
    this.videoService.getVideos()
      .subscribe(data => {
        this.videos = data;
		this.filterData = data;
      });
  }
  deleteVideo(video: VideoModel): void {
    this.videoService.deleteVideo(video.VideoId)
      .subscribe(data => {
        this.videos = this.videos.filter(u => u !== video);
      })
  };

 

  addVideo(): void {
    this.router.navigate(['addvideo']);
  };
  
  clear(){
	  this.videos = this.filterData;
  }
  
    
	applyFilter(event) {
		var filterValue = event.target.value;
		this.data = this.videos.find(x=> x.VideoName.indexOf(filterValue) >-1)
		this.videos = this.data;
		
	}
   open(content, video:VideoModel) {
	   this.id = video.VideoLink;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }

}
