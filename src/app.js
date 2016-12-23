import $ from 'jquery';
// import {Car} from './classes/car.js';
// import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
// removing below imports because we dont need them here. any shared <code>
// we will put in ApplicationBase. 
// import {Button} from './ui/button.js';
// import {Image} from './ui/image.js';
// import {TitleBar} from './ui/title-bar.js';
// import {DataTable} from './ui/data-table.js';
// import {GoogleMap} from './ui/google-map.js';
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './home-page.js';
import {CarsPage} from './cars-page.js';

// for creating our specific App based on this framework we want to create
// a class for it(like React does) then in body call constructor, super()
// and create any state we want specific to this class. Remember that functionality
// we want all apps using this framework to use should be in ApplicationBase.
// in App we put code we want this app to use.
// calling super give us access to the methods on the parent class. in our parent
// class, the constructor take a title param as its only param. So we have to 
// pass that into super()
// We want the entire app to have access to the data server we created so we 
// have to pass it here in the App constructor

export class App extends ApplicationBase {
  constructor() {
    super('Fleet Manager');

    this.dataService = new FleetDataService();
    this.dataService.loadData(fleet);

    // lets create an addRoute method on parent class (ApplicationBase)
    //  to be our router for links with 3 params:
    // 1. the name, 2. the object we want it to go to, 3. optional boolean for if route
    // is default route or not.
    // TODO: add check for default route in ApplicationBase class
    this.addRoute('Home', new HomePage(), true);
    this.addRoute('Cars', new CarsPage());
    this.addRoute('Drones', null);
    this.addRoute('Map', null);

  }
}

// so we have created the App class. How do we use it?
// To use it we will go ahead and set a variable which instantiates it. Remember
// that the class by itself doesnt do anything. Its like an uncalled function.
// so if we want to use this class for our app we have to create/instantiate 
// and object of this class. We do that by using the new keywork in a var.
// We want to export it from this module so that we can import and use it in other 
// modules.
// we could probably also do:
//  let application = new App();
//  export application;
export let application = new App();
// to show the application in the dom
// we have to add the show method to the parent class so that any time 
// this is called, for any App, it will show.

// So, we export the application so that other extended classes can have access
// to it and add functionality. Those changes will show because this is already
// showing in the DOM by calling show. In this case, this will only show 
// the titleBar because that is all we defined in the parent class, ApplicationBase
application.show($('body'));