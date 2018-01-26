import {inject} from "aurelia-framework";
import TweetService from '../../services/tweet-service';
import {AllTweetsReady} from '../../services/messages';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(TweetService, EventAggregator)
export class GlobalTimeline {

    tweets = [];

    constructor(ts, ea) { 
        this.tweetService = ts;
        ts.getTweets();
        ea.subscribe(AllTweetsReady, msg => {
            this.tweets = msg.tweets;
        });     
        
    }

}