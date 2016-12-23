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
  }

  getElementString() {
    return `
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          ${this.title}
        </button>
    `;
  }
}