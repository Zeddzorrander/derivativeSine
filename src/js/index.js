import { parameters, parameters2, views } from './configGeo';
// import './intervals'
import * as ggb from './ggb'
import '../styles.css'
import { elements, getInputValue, updateInput, drawTable, deleteLastSlope, updateInput2 } from './UI';
// import Interval from './intervals';

let ggbApp = new GGBApplet(parameters, '5.0', views);
let ggbApp2 = new GGBApplet(parameters2, '5.0', views);

class State {
    constructor() {
        this.xValues = [];
        this.index = 0;
        this.slopes = [];
        this.points = [];
    }
    
    addXval(xVal) {
        this.xValues.push(xVal);
        this.index = this.xValues.length - 1;
    }
    addSlope(slope) {
        this.slopes.push(slope);
        this.index = this.slopes.length - 1;
    }
    removeSlope() {
        this.slopes.pop();
        this.index = this.slopes.length -1;
    }
    removeXval() {
        this.xValues.pop();
        this.index = this.xValues.length - 1;
    }
    addPoint(index) {
        this.points.push({x: this.xValues[index], y: this.slopes[index]});
    }
}

let ggbState = new State();

function updateXval() {
    let xVal = getInputValue('xVal');
    xVal = ggb.parseEntry(xVal);
    ggbState.addXval(xVal);
    const index = ggbState.index;
    ggb.updateGGBa(xVal);
    updateInput2(xVal, index);
}

function updateGeoSlope() {
    let slope = getInputValue('slope');
    slope = ggb.parseEntry(slope);
    ggbState.addSlope(slope);
    const index = ggbState.index;
    ggbState.addPoint(index);
    ggb.updateGGB(slope, index);
    updateInput(index, slope);
}

function back() {
    ggbState.removeSlope();
    const index = ggbState.index;
    ggb.deleteSlope(index);
    deleteLastSlope(index);
    clearSlope();
}

function handleKeyPress(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        elements.next.click();
    }
}

window.onload = function() {
    ggbApp.inject('ggbApplet', 'preferHTML5');
    ggbApp2.inject('ggbApplet2', 'preferHTML5');
    elements.xVal.focus();
    elements.next.addEventListener('click', updateGeoSlope);
    elements.submit.addEventListener('click', updateXval);
    elements.submit.onkeypress = handleKeyPress;
    elements.slope.onkeypress = handleKeyPress;
    drawTable(ggbState.xValues);
    elements.back.addEventListener('click', back);
    elements.back.style.visibility = 'hidden';
    elements.p_input2.style.display = 'none';

}
