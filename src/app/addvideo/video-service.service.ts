import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoModel } from './video.modal'

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {
  baseUrl: string = 'http://localhost:3000/Videos';

  constructor(private http: HttpClient) { }
  getVideos() {
    return this.http.get<VideoModel[]>(this.baseUrl);
  }

  getVideoById(id: number) {
    return this.http.get<VideoModel>(this.baseUrl + '/' + id);
  }

  createVideo(Video: VideoModel) {
    return this.http.post(this.baseUrl, Video);
  }

  updateVideo(Video: VideoModel) {
    return this.http.put(this.baseUrl + '/' + Video.VideoId, Video);
  }

  deleteVideo(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

}
