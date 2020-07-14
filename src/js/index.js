import { parameters, parameters2, views } from './configGeo';
// import './intervals'
import * as ggb from './ggb'
import '../styles.css'
import { elements, getInputValue, updateInput, drawTable, clearSlope, deleteLastSlope } from './UI';
// import Interval from './intervals';

let ggbApp = new GGBApplet(parameters, '5.0', views);
let ggbApp2 = new GGBApplet(parameters2, '5.0', views);

class State {
    constructor() {
        this.xValues = [];
        this.index = 0;
        this.slopes = [];
        this.popXvalues();
    }
    popXvalues() {
        for (let i = 0; i < 24; i++) {
            this.xValues.push(Math.round(100*(i * Math.PI / 12)) / 100);
        }
    }
    addSlope(slope) {
        this.slopes.push(slope);
        this.index = this.slopes.length - 1;
    }
    removeSlope() {
        this.slopes.pop();
        this.index = this.slopes.length -1;
    }
}

let ggbState = new State();

function update() {
    let slope = getInputValue('slope');
    slope = ggb.parseSlope(slope);
    ggbState.addSlope(slope);
    const index = ggbState.index;
    ggb.updateGGB(slope, index);
    updateInput(index, slope);
    clearSlope();
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
    elements.slope.focus();
    elements.next.addEventListener('click', update);
    elements.slope.onkeypress = handleKeyPress;
    drawTable(ggbState.xValues);
    elements.back.addEventListener('click', back);
    elements.back.style.visibility = 'hidden';

}
