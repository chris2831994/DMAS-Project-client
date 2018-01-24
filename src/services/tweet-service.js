import {inject} from 'aurelia-framework';
import Fixtures from './fixtures';
import {LoginStatus} from './messages';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Fixtures, EventAggregator)
export default class TweetService{
    
    users = [];
    tweets = [];

    constructor(data, ea){
        this.users = data.users;
        this.tweets = data.tweets;
        this.ea = ea;
    }

    login(email, password){
        const status = {
            success: false,
            message: ''
        };

        if(this.users[email]){
            if(this.users[email].password === password) {
                status.success = true;
                status.message = 'logged in';
            } else {
                status.message = 'Incorrect password';
            } 
        } else {
            status.message = 'Unknown user';
        }
        this.ea.publish(new LoginStatus(status));
    }

    register(firstName, lastName, userName, email, password){
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            description: "This is a profile description",
            email: email,
            password: password,
            profileImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAyCAIAAAClJN76AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QwTETULvpeljgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAANJSURBVFjD7ZffShtBFMZnZnfdmARNoDQQ+yc10VqwjVChhWqU+ARC9LYXfahCX0Bv1CuxRFFBLVWSgjUaDQ01MVHBGOIqm83OzkwvpKHGZKPJbhXac7ews7/5vjl75hz48dMpuLtA4E6Db2CNJFFCQCqt2Wzo+Ji43VwuR10PkcfDm4jPZMnhIYlE1Nwpubhg11/wPOX7+1vcbu5RB2ckPn1AYjH1+xYuFCilNV/bT2npA83hQK9eCr29LU8ec83ii0X2I6ktLyuHR4SQ+hulFOTzdGW1lExqw8MWn5dvbYUNpl6xyCJRdWpaPsjciF0OQsBBhkxNy5GoWiyyRtQXi2x1rbS0XNI01lhWyzKb+6woCht4J9byoKb69Q11cUlpmH0ZmsYWl5T1DfV25kejanheuZXhOgcRnleiUfWmeEmi4YVmdVd4EF5QJIneCD87pxQK1NjqVijQ2TmlPj6TJYkEZsxYOmAMJBI4kyV18PE4lmWj4b9/hHgc18HHto2XXjYgtq2LlySaz1NgWuTztCIBr+LPGcbMPDzGTDpneuqpieIBpUBPvSF1pm4V0sEz8/HsHjVbV/D6d7MhUYG4gnc4TDejAnHlwelAFtFEAywidOrgBQE20K3ePDweXhBqmw8h6PMLyJwTQAj0+QUIdWu+z8e7XJwZeJeL8/n4OleO3Y5GghbDDUAIjAQtdjuqg0cIdHfxXq/BGeD18t1d/HVVVWSKIhwPWQ38BSwiHA9ZxWofrIKHELS1oWDQAo3YAIQgGLS0taGqX0O11gwFRG+nAUfg7eSHAmItJUhn12Mhq83WlAM2GxwLWXVc1EtxpxMFBsVm8IFB0elEjc94qVRTLUAqRfRnvJr4dFqbmpb3ErgZ/F4CT03L6bR2ixGTEPBzX5uZkXOntMmulxCwFcNHR2R01PrMw3NcPfWEgJ04npiUT3LUkI6bMXCSoxOT8k4cX2/m+D/7wLMzurJa+rquGjjgXcb5OZ2YlN++aRkcENvbUbn88Zcb3N3Dm5s4vosVhZk0ZmgaW/tSin5TX/QIfr/Q81yAEMD3Hw4jUZzNan+hzS0Hx4GODr7/tQDbHyRN7e31r0F0V+zLbLtPjfZ//H/8P4P/BaUljmJ8GjTRAAAAAElFTkSuQmCC",
            follows: []
        }
        this.users[email] = newUser;
    }

    postTweet(text, user){
        let tweet = {
            author: user,
            text: text,
            date: "asd",
            formattedDate: "asdfasd"
        };
        this.tweets.push(tweet);
        console.log("tweeted message" + text);
    }

    logout(){
        const status = {
            success: false,
            message: ''
        };
        this.ea.publish(new LoginStatus(status));
    }
      
}