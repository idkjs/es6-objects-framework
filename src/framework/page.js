// page.js in the framework folder is a good place to have common elements and
// styling for all the pages. we can then extend to make our individual pages.

import {BaseElement} from '../ui/base-element.js';

export class Page extends BaseElement {
  // create constructor taking page title as param.
  // call super() to get parent class functionality.
  // store page title in local state.
  // add any other common functionality we want here later.
  constructor(pageTitle) {
    super();
    this.pageTitle = pageTitle;
  }
}