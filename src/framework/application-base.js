// create and application base class that we can use to build multiple application
// of whatever type we want using the classes we include here.
// best practice is having a single application object like this.

// this is our top level class. we only have title in here. We can keep adding
// any functionality that will be common to any application we build here.

import {TitleBar} from '../ui/title-bar.js';

export class ApplicationBase {
  // we will pass in a title and create a title bar with that title when
  // we use this class to construct an app.
  constructor(title) {
    this.title = title;
    this.titleBar = new TitleBar(this.title);
    // remember that constructor is where we keep local state.
    // Here we create the state for our routes with a routeMap object which
    // will hold all the routes passed to our application as key value pairs.
    // id is key, pageObject is value.
    this.routeMap = {};
    // set defaultRoute state to null. this will update if any route get created
    // with 3rd param set to true.
    this.defaultRoute = null;

  }

// activateRoute method taking passed in defaultRoute as route param.
// set a local var 'content' equal to the element in titleBar that is called 
//  .page-content. we call the jquery find ment on the titleBar element
// see: <https://api.jquery.com/find/#find-element> this searches the dom tree
//  for the passed in element, here titleBar, and searches for .page-content.
// then we call jquery's empty method on it to remove all child node for the 
// returned element. see: <https://api.jquery.com/empty/>
activateRoute(route) {
  let content = this.titleBar.element.find('.page-content');
  content.empty();
//  get the route passed in to activateRoute, find it in the routeMap key:value
// store, and append it to the dom at .page-content. Our mdl template code
// has a page-content class on it, so that is what we are targeting.
  this.routeMap[route].appendToElement(content);
}

  // create addRoute method for all of the apps to be able to access
// we define addRoute as taking to params and a third which default to false.
// if we pass this from and another class it will override the default. We will
// pass in the name of the route as id and where we want it to go as object.
// addLink is a method on titleBar which we imported above that adds passed link
// to the array of links to be displayed in the title bar.
  addRoute(id, pageObject, defaultRoute = false) {
    this.titleBar.addLink(id, '');
    // takes the id and pageObject and add to routeMap object as key:value pair
    this.routeMap[id] = pageObject;
    // if default route is set to true, set state for default route to the id
    // of the route passing in true.
    if(defaultRoute) {
      this.defaultRoute = id;
    }
  }
// this method allows us to attach any extended application base in the dom 
// by calling show and passing in the DOM element we want the class object to show
//  on like body, main, or some element id.
  show(element) {
    this.titleBar.appendToElement(element);
// add check for defualt route. if default route is true activate that route.
// add activate route method above.
    if (this.defaultRoute) {
      this.activateRoute(this.defaultRoute);
    }
  }
}
