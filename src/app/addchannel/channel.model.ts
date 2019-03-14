export class ChannelModel {
    ChannelId: number = 0;
    ChannelName: String = '';
    Description: String = '';
    Category: String = '';
    isChannelActive : number = 0;

    constructor(channel?: {
        ChannelName: String;
        ChannelId: number;
        Description: String;
        Category: String;
        isChannelActive: number;

    }) {
        if (channel !== undefined) {
            this.ChannelId = channel.ChannelId;
            this.ChannelName = channel.ChannelName;
            this.Description = channel.Description;
            this.Category = channel.Category;
            this.isChannelActive = channel.isChannelActive;
        }
    }
}


