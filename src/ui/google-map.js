import {BaseElement} from './base-element.js';

export class GoogleMap extends BaseElement {
    // pass in centerOfMap and data and store it on to this 
    // instance of the GoogleMap constructor
    constructor(centerOfMap, data) {
        super();
        this.centerOfMap = centerOfMap;
        this.data = data;
    }
    
    // the google api requires it to create it own element. we have 
    // been creating our elements with createElement in our constructors
    // so for google maps to find a dom for google maps to attach to we 
    // have to overide the createElement being inherited from BaseElement
    // by calling it here. What we are doing here is overriding by calling it,
    // then calling it ourselves here with super.createElement which then creates
    // the element at this point rather than before. If we let it call from before,
//  the element would not have been ready, there would be no DOM node for 
// google maps to attach to. So after createElement runs, it creates the dom, and
//  then we call it create element on super which will go through the regular
// process of creating the element with the string. Since googles api, requires
// it to handle this, we had to make sure DOM was there for it do this. We were
// handling this ourselves for all of our own elements.

// call createElement to create the DOM. This will try to create the google map
// when it runs getElementString but none will be created because google maps
// wont find a dom to attach to though the string will be there.
// by calling super.createElement, basically, calling createElement again,
// google maps will be able to find the div id=map we just created. 
// calling setTimeout is supposed to give google...not sure what is going on 
// here.
    createElement() {
        super.createElement();

        // call setTimeout without passing in a time param. (never seen that before)
        // See: <http://www.w3schools.com/jsref/met_win_settimeout.asp> setTimeout
        // calls a function or evaluates and expression after a set amount of time.
        // if we dont pass in any time, we are just telling it to call setTimeout,
        // then do the next thing.
        setTimeout(() => {
            var map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: this.centerOfMap
            });
            // loop over data. create array with lat and long. Get the 
            // latlong data off of vehicle, and split it into an array based
            // on space between lat long. so basically, this is saying, lat and
            // long is equal to the array produced from calling split .latlong
            //  value.
            for (let vehicle of this.data) {
                let [lat, long] = vehicle.latLong.split(' ');
                console.log('lat:' + lat);
                // pass in lat and long from array to LatLng method 
                // on google maps api to create myLatLng
                let myLatLng = new window.google.maps.LatLng(lat, long);
            
                var marker = new window.google.maps.Marker({
                    position: myLatLng,
                    map: map
                });
                
                marker.setMap(map);
            }
            
        }, 0);

    }
    
    // google maps requires we set hieght and width of map and that
    // there is a div id=map that google maps looks for to attach to.
    getElementString() {
        return `<div style="width:800px; height: 400px;" id="map"></div>`;
    }
    
}