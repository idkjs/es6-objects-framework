import {Page} from './framework/page.js';
import {DataTable} from './ui/data-table.js';
// data service for car data is in appliction in app.js
import {application} from './app.js';

export class CarsPage extends Page {
    
    constructor() {
        super('Cars');
    }
    
    createElement() {
        super.createElement();
        // set headers equal to array of keys we want with split to array method
        let headers = 'License Make Model Miles'.split(' ');
        let t = new DataTable(headers, application.dataService.cars);
        t.appendToElement(this.element);

    }
    
    getElementString() {
        return '<div style="margin: 20px;"><h3>Cars</h3></div>';
    }
}