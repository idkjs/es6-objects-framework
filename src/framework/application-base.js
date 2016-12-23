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
  }
// this method allows us to attach any extended application base in the dom 
// by calling show and passing in the DOM element we want the class object to show
//  on like body, main, or some element id.
  show(element) {
    this.titleBar.appendToElement(element);
  }
}
