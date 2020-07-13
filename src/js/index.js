import { parameters, parameters2, views } from './configGeo';
// import './intervals'
import * as ggb from './ggb'
import '../styles.css'
import { elements, getInputValue, updateInput, resetDOM } from './UI';
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
            this.xValues.push(i * Math.PI / 12);
        }
    }
    addSlope(slope) {
        this.slopes.push(slope);
        this.index = this.slopes.length - 1;
    }
}

let ggbState = new State();

function update() {
    const slope = getInputValue('slope');
    ggbState.addSlope(slope);
    const index = ggbState.index;
    ggb.updateGGB(slope, index);
    updateInput(index);
}

function handleKeyPress(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        elements.slope.click();
    }
}

window.onload = function() {
    ggbApp.inject('ggbApplet', 'preferHTML5');
    ggbApp2.inject('ggbApplet2', 'preferHTML5');
    elements.slope.focus();
    elements.next.addEventListener('click', update);
    elements.slope.onkeypress = handleKeyPress;
}
