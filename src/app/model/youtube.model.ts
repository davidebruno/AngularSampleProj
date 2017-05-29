
export class YoutubeElement {
    urlImg: string;
    vidDesc: string;
    views: number;
    like: number;
    updated: string;

    constructor(urlImage: string, videoDesc: string, views: number, like: number, updated: string){
        this.urlImg = urlImage;
        this.vidDesc =  videoDesc;
        this.views = views;
        this.like = like;
        this.updated = updated;
    }
}
