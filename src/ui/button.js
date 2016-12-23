// import the our element constructor
import {BaseElement} from './base-element.js';

// create a new class which extends our base element

export class Button extends BaseElement {
  // create constructor so we can re-use this button.
  // pass it the title that comes with the button.
  constructor(title) {
    // call super to get properties of parent class
    super();
    this.title = title;
    // create local state for styleString
    this.styleString = '';
  }

// add interpolated styleString method to button style classes
// style is from html api. see:<http://www.w3schools.com/tags/tag_style.asp>
  getElementString() {
    return `
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" style="${this.styleString}">
          ${this.title}
        </button>
    `;
  }
  // create setStyleString() so we can call it from homepage.js where we are styling
  // our button.
  setStyleString(style) {
    this.styleString = style;
  }
}