import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ChannelModel} from './channel.model'



@Injectable({
  providedIn: 'root'
})
export class ChannelServiceService {

  baseUrl: string = 'http://localhost:3000/Channels';


  constructor(private http: HttpClient) { }

  getChannels() {
    return this.http.get<ChannelModel[]>(this.baseUrl);
  }

  getChannelById(id: number) {
    return this.http.get<ChannelModel>(this.baseUrl + '/' + id);
  }

  createChannel(channel: ChannelModel) {
    return this.http.post(this.baseUrl, channel);
  }

  updateChannel(channel: ChannelModel) {
    return this.http.put(this.baseUrl + '/' + channel.ChannelId, channel);
  }

  deleteChannel(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

}
