import {inject} from "aurelia-framework";
import TweetService from '../../services/tweet-service';

@inject(TweetService)
export class Profile {
    user = null;

    constructor(ts) {
        this.user = ts.user;
    }
}