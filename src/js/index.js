import { parameters, parameters2, views } from './configGeo';
// import './intervals'
import * as ggb from './ggb'
import '../styles.css'
import { elements, getInputValue, updateInput, drawTable, deleteLastSlope, updateInput2, resetDOM, updateUICorrect, updateUIIncorrect } from './UI';
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
    const xVal = ggbState.xValues[index + 1];
    ggb.deleteSlope(index, xVal);
    deleteLastSlope(index, xVal);
}

function removePair() {
    //remove xVal and slope from state
    ggbState.removeXval();
    ggbState.removeSlope();
    const index = ggbState.index;
    
    //remove point from GGB2
    ggb.deleteSlope(index, xVal);

    resetDOM()
    
}

function addGuess() {

}

function graphDerivative() {
    // get input from user
    let derivative = getInputValue('derivative');

    // get actual derivative from ggb1 and trim to just the function
    let corDer = ggb.getDerivative();
    let index = corDer.indexOf('=');
    corDer = corDer.slice(index + 1);

    // graph the user entered guess, grab its value from ggb2, and trim to just function
    let ggbDerivative = ggb.graphDerivativeGuess(derivative);
    let index2 = ggbDerivative.indexOf('=');
    ggbDerivative = ggbDerivative.slice(index2 + 1);

    // compare correct derivative with user entered derivative to determine what to do with UI
    if (ggbDerivative === corDer) {
        //add correct feedback before table of values and remove all other
        updateUICorrect();
    } else {
        //add incorrect feedback before table of values with ability to add next pair
        updateUIIncorrect();
    }
}

function handleKeyPress(e) {
    if (e.keyCode === 13 && e.target.id === 'slope') {
        e.preventDefault();
        elements.next.click();
    } else if (e.keyCode === 13 && e.target.id === 'xVal') {
        e.preventDefault();
        elements.submit.click();
    }
}

window.onload = function() {
    ggbApp.inject('ggbApplet', 'preferHTML5');
    ggbApp2.inject('ggbApplet2', 'preferHTML5');
    elements.xVal.focus();
    elements.next.addEventListener('click', updateGeoSlope);
    elements.submit.addEventListener('click', updateXval);
    elements.deletePair.addEventListener('click', removePair);
    elements.guess.addEventListener('click', addGuess);
    elements.submitDerivative.addEventListener('click', graphDerivative)
    elements.xVal.onkeypress = handleKeyPress;
    elements.slope.onkeypress = handleKeyPress;
    drawTable(ggbState.xValues);
    elements.deletePair.style.visibility = 'hidden';
    elements.p_input2.style.display = 'none';
    elements.p_buttons.style.display = 'none';
    elements.p_correct.style.display = 'none';
    elements.p_feedback.style.display = 'none';
}
