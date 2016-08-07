import {Component} from 'angular2/core';
import {ConfigSettings} from './config.service';

@Component({
    selector: 'my-app',
    template: '<h1>{{myHeading}}</h1>'
})

export class AppComponent {
    myHeading = ConfigSettings.MAIN_TITLE


}

