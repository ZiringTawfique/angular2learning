import {Component} from 'angular2/core';
import {ConfigSettings} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives:[PlaylistComponent]
})


export class AppComponent {
    myHeading = ConfigSettings.MAIN_TITLE;
    myVideoArray : Array<Video>;

    constructor(){
        this.myVideoArray = [
            new Video(1, "first video","f8qBeaGe2S4","learning angular 2"),
            new Video(2, "second video","f8qBeaGe2S4","learning angular 2")


        ]

    }



}


