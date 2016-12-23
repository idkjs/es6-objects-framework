// import the our element constructor
import {BaseElement} from './base-element.js';

// create a new class which extends our base element
// go to app.js to use element or wherever you want to use it.

export class TitleBar extends BaseElement {
  // create constructor so we can re-use this Image class.
  // pass it the image file.name that we want to show.
  constructor(title) {
    // call super to get properties of parent class
    super();
    this.title = title;
    // lets add links to the constructor and pull it out of
    // the div in getElementString. We can create an [] to hold
    // our links then use the addLink mdl method.
    this.links = [];
  }
// method for adding links. we will have to pass in our links
// when we call tb.addLink in app.js and pass in our link params
  addLink(title, href) {
    this.links.push({
      title,
      href
    })
  }

  getElementString() {
    // set links to empty string placeholder
    let links = '';
    // use for loop to create a link element for each link we pass in. We <area shape="" using {interpolation} to populate each passed in link into
    // our <a tag string template. Then we can again use interpolation
    // to populate our title bar html string template with the links
    // instead of hard coding them.

    for (let link of this.links)
    // TODO: remove href which tells browser where to go, because we are going 
    // to use the onClick method.
        links += `<a class="mdl-navigation__link">
                  ${link.title}
                  </a>\n`;

    return `
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
              <!-- Title -->
              <span class="mdl-layout-title">${this.title}</span>
              <!-- Add spacer, to align navigation to the right -->
              <div class="mdl-layout-spacer"></div>
              <!-- Navigation. We hide it in small screens. -->
              <nav class="mdl-navigation mdl-layout--large-screen-only">
                ${links}
              </nav>
            </div>
          </header>
          <div class="mdl-layout__drawer">
            <span class="mdl-layout-title">${this.title}</span>
            <nav class="mdl-navigation">
              ${links}
            </nav>
          </div>
          <main class="mdl-layout__content">
            <div class="page-content"><!-- Your content goes here --></div>
          </main>
    `;
  }
}