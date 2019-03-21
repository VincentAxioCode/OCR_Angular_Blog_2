import {Component, Input} from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor() {
        const config = {
            apiKey: "AIzaSyD8sNPz6UnelYSp7YbwQeRXv2DBZuvIznE",
            authDomain: "ocr-blogv2.firebaseapp.com",
            databaseURL: "https://ocr-blogv2.firebaseio.com",
            projectId: "ocr-blogv2",
            storageBucket: "ocr-blogv2.appspot.com",
            messagingSenderId: "423098022382"
        };
        firebase.initializeApp(config);
    }
}
