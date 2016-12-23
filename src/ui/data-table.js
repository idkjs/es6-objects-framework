import {BaseElement} from './base-element.js';

export class DataTable extends BaseElement {

  constructor(headers, data) {
    super();
    // set the state for imported data. by using data instead of cars or drones,
    //  we can reuse this class for any data we decide to show.
    this.headers = headers;
    this.data = data;

  }

// call getElementString() to render our template
  getElementString() {
    // generate interpolated data for thTags/trTags. create variable set to 
    // empty string that we will change with passed in data
    let thTags = '';
    // loop over passed in data to create thTags
    for (let h of this.headers) {
      thTags += `<th class="mdl-data-table__cell--non-numeric">${h}</th>\n`;
    }
// trTags are more complicated because we are getting data and adding it to each
// tag. Set trTags to empty string placeholder
    let trTags = '';
    // loop over passed in data...
    for (let row of this.data) {
      // generate new tr opening tag for each data item
      trTags += `<tr>`;
      // create placeholder for each table data tag.
      let tdTags = '';
      // loop over table data and create a new td tag for passed in item
      // being iterated over.
      for (let property of this.headers) {
        // tag name comes in uppercase so conver to lowercase
        let field = row[property.toLowerCase()];
        // create each tr tag with interpolated data properly formatted and with
        // interpolated data in td tag. 
        trTags += `<td class="mdl-data-table__cell--non-numeric">
                  ${field}
                  </td>
                  `;
      }
      // add closing trTag to each item, </tr>
      trTags += '</tr>';
    }

    return `
      <table class="mdl-data-table mdl-js-data-table mdl-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            ${thTags}
          </tr>
        </thead>
        <tbody>
          ${trTags}
        </tbody>
      </table>  
  `;
  }
}