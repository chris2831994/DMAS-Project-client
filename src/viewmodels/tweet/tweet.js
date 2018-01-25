import {inject} from "aurelia-framework";
import TweetService from '../../services/tweet-service';

@inject(TweetService)
export class Tweet {

    text = "Hello World";
    tweets = [];
    user = null;
    selectedOption = {};

    constructor(ts) {
        this.tweetService = ts;
        this.tweets = ts.userTweets;
        this.user = ts.user;
        this.selectedOption = this.tweets[0];
    }

    postTweet() {
      this.tweetService.postTweet(this.text, this.user);
    }

    deleteTweet(){
      this.tweetService.deleteTweet(this.selectedOption._id);
      this.tweets = this.deleteTweettweetService.userTweets;
      this.selectedOption = this.tweets[0];
    }
  }