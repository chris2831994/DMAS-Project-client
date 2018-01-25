import {inject, Aurelia} from 'aurelia-framework';

@inject(Aurelia)
export class Home {

    constructor(au){
        this.aurelia = au;
    }

    configureRouter(config, router){
        config.map([
            {route:['', 'home'], name:'tweet', moduleId:'viewmodels/tweet/tweet', nav:true, title:'Your Timeline'},
            {route:'globalTimeline', name:'globalTimeline', moduleId:'viewmodels/globalTimeline/globalTimeline', nav:true, title:'Global Timeline'},
            {route:'logout', name:'logout', moduleId:'viewmodels/logout/logout', nav:true, title:'Logout'}           
        ]);
        this.router = router;

        config.mapUnknownRoutes(instruction => {
            return 'home';
        });
    }
}