/**
 * Created by Tawfique on 17/08/16.
 */

export class Video {

    id: number;
    title:string;
    videoCode:string;
    describtion: string;

    constructor(id: number, title:string, videoCode:string, describtion: string){

        this.id = id;
        this.title = title;
        this.videoCode = videoCode;
        this.describtion = describtion;

    }


}