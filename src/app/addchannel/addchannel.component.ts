import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ChannelServiceService } from "./channel-service.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addchannel',
  templateUrl: './addchannel.component.html',
  styleUrls: ['./addchannel.component.styl']
})
export class AddchannelComponent implements OnInit {
  channelForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private channelService: ChannelServiceService) { }

  ngOnInit() {
    this.channelForm = this.formBuilder.group({
      ChannelId: [0,''],
      ChannelName: ['', Validators.required],
	  isChannelActive:[0,''],
      Category: ['', Validators.required],
      Description: ['', Validators.required]
    });
  }
  onSubmit() {
    this.channelService.createChannel(this.channelForm.value)
      .subscribe(data => {
        this.router.navigate(['channel']);
      });
  }

}
