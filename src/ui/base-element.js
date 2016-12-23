// here we are creating a base-elements file to use in creating 
// class based ui elements for browser.
// for file names use camel-case. for class names, use 
// PascaleCaseing.

// We are basically creating a Component that we can extend for 
// what ever UI we want to create. This looks like what React does.
// import jquerys default export

import $ from 'jquery';

export class BaseElement {
  // turn this into constructor since we will be extending it.
  constructor() {
      this.element = null; // store jQuery object in constructor
      //  - note indicating this is not a dom object but a jQuery object dom element
  }

  // methods for this constructor


  // append whatever element we create to another element.
  // pass our element in appendToElement, call createElement() on it
  // then append it to the target element on dom.
  appendToElement(el) {
    this.createElement();
    // el is a jquery method
    el.append(this.element);
    // enable mdl js
    this.enableJS();
  }
  // this method creates the jquey mapped object
  createElement() {
    let s = this.getElementString();
    // pass s to $ to create the element in jquery
    this.element = $(s)
  }
  // an element is just a string before it becomes part of DOM
  // create a method for getting the string. Each component we 
  // create is going to have its own string representing the tags,
  // attributes, etc. So if we arent overriding an element, then
  // we have done something wrong. This throws an error reminding
  // dev to override getElementString. In our extended classes, if we forget
  // to make a call to this, then this will remind us. Important because this 
  // is where our actual element is.

  // Try to explain again. This is the top level class object. We have added getElementString() to it so its present on anything we create with extend method. So this will run everytime we run a class that extends BaseElement...UNLESS we override it
  // by creating the same function on the extended class. Remember that inhereted class
  // methods can be overridden. Here we are using that functionality as an error handler or linter sorta...nice.

  getElementString() {
    throw 'Please override getElementString() in BaseElement';
  }

// all enableJS from mdl which allows us to notify mdl that it should allow javascript
//  to run on mdl elements. This will enable the ripple effect we thought we were
//  getting on the button. right now, mdl doesnt know the button is there because 
// the way we imported it as module. this would have worked if we just imported with script tag
// we are calling the upgradeElement methos on this.elements unwrapped DOM object
// which is at index zero. So this element is an array of 1 dom object and we are telling
//  mdl to run upgrade that element. Call this in appendToElement
  enableJS() {
    componentHandler.upgradeElement(this.element[0]);
  }
}