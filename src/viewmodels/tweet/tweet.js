import {inject} from "aurelia-framework";
import TweetService from '../../services/tweet-service';
import {UserTweetsReady} from '../../services/messages';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(TweetService, EventAggregator)
export class Tweet {

    text = "Hello World";
    tweets = [];
    user = null;
    selectedOption = null;

    constructor(ts, ea) { 
        this.tweetService = ts;
        this.user = ts.loggedInUser;  
        ts.getUserTweets();
        ea.subscribe(UserTweetsReady, msg => {
          this.tweets = msg.tweets;
          if(this.tweets.length > 0)
            this.selectedOption = this.tweets[0];
        });
        
                        
        
    }

    postTweet() {
      this.tweetService.postTweet(this.text, this.user);
    }

    deleteTweet(){
      this.tweetService.deleteTweet(this.selectedOption._id);
      if(this.tweets.length > 0)
        this.selectedOption = this.tweets[0];
    }
  }