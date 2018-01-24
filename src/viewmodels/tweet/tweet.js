import {inject} from "aurelia-framework";
import TweetService from '../../services/tweet-service';

@inject(TweetService)
export class Tweet {

    text = "Hello World";
    tweets = [];
    user = null;

    constructor(ts) {
        this.tweetService = ts;
        this.tweets = ts.tweets;
        this.user = ts.user;
    }

    postTweet() {
      this.tweetService.postTweet(this.text, this.user);
    }
  }