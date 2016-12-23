import {Page} from './framework/page.js';
import {Image} from './ui/image.js';
import {Button} from './ui/button.js';
import {application} from './app.js';

export class HomePage extends Page {
    // pass name of page to super() as required by page class.
    constructor() {
        super('Home');
    }
    
    createElement() {
        // call createElement from super class to make sure its run correctly..
        // what does this mean exactly? Calling super() is supposed to gaurantee
        // that the element exists when we go to create it. The must have to do
        // with the order in which its called. Since we are creating a class, which
        // doesnt do anything, all the code in our super() will run at the same
        // time and there wont be a div present to style. By calling create element
        // here we are overriding the createElement that is inherited and making
        // that its called before the rest of this code runs....i think.
        super.createElement();
        
        let i = new Image('../images/drone.jpg');
        i.appendToElement(this.element);
       
        let styleString = 'width: 300px; height: 80px; font-size: 26px; margin: 10px;';
        let b = new Button('Self Driving Cars');
        // TODO: create setStyleString on button class.
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        // TODO: create activeRoute method
        b.element.click(() => application.activateRoute('Cars'));
        
        b = new Button('Drones');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        // TODO: create activeRoute method
        b.element.click(() => application.activateRoute('Drones'));
    }
    
    getElementString() {
        // called center to get buttons to show centered
        return '<div style="text-align: center;"></div>';
    }
}