import {inject} from "aurelia-framework";
import TweetService from '../../services/tweet-service';

@inject(TweetService)
export class GlobalTimeline {

    tweets = [];

    constructor(ts) {
        this.tweetService = ts;
        this.tweets = ts.tweets;
    }

}