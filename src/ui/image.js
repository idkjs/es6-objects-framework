// import the our element constructor
import {BaseElement} from './base-element.js';

// create a new class which extends our base element
// go to app.js to use element or wherever you want to use it.

export class Image extends BaseElement {
  // create constructor so we can re-use this Image class.
  // pass it the image file.name that we want to show.
  constructor(fileName) {
    // call super to get properties of parent class
    super();
    this.fileName = fileName;
  }

  getElementString() {
    return `
        <img src="${this.fileName}" style="width: 100%" />
    `;
  }
}