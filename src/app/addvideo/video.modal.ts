export class VideoModel {
    VideoId: number =0;
    VideoName: String = '';
    VideoLink: String = '';
    ChannelName : String = "";
    ChannelId : number = 0;
    Description: String = '';
    Category: String = '';

    constructor(video?: {
        VideoName: String;
        VideoLink: String;
        ChannelName: String;
        ChannelId: number;
        VideoId : number;
        Description: String;
        Category: String;

    }) {
        if (video !== undefined) {
            this.VideoId = video.VideoId;
            this.VideoLink = video.VideoLink;
            this.ChannelName = video.ChannelName;
            this.ChannelId = video.ChannelId;
            this.VideoName = video.VideoName;
            this.Description = video.Description;
            this.Category = video.Category;
            
        }
    }
}


