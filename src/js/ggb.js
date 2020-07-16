export function updateGGB(slope, index) {
    const a = ggbApplet.getValue('a');
    ggbApplet2.evalCommand(`C_${index} = (${a}, ${slope})`);
    ggbApplet2.setColor(`C_${index}`, 0,0,0);
    ggbApplet2.setLabelVisible(`C_${index}`, false);
    ggbApplet2.setPointStyle(`C_${index}`, 0);
    ggbApplet2.setPointSize(`C_${index}`, 5);
    // index += 1;
    // ggbApplet.setValue('a', index * Math.PI / 12);
}

export function updateGGBa(xVal) {
    // if (ggbApplet.getVisible(`f'`)) ggbApplet.setVisible(`f'`, false);
    ggbApplet.evalCommand(`a = ${xVal}`);
}

export function parseEntry(value) {
    // if (ggbApplet.getVisible(`f'`)) ggbApplet.setVisible(`f'`, false);
    ggbApplet.evalCommand(`temp = ${value}`);
    const xVal = getRoundedValue('temp', 2);
    ggbApplet2.deleteObject('temp');
    return xVal;
}
export function deleteSlope(index, xVal) {
    // if (ggbApplet.getVisible(`f'`)) ggbApplet.setVisible(`f'`, false);
    index += 1;
    ggbApplet2.deleteObject(`C_${index}`);
    ggbApplet.setValue('a', xVal);
}

export function graphDerivativeGuess(derivative) {
    // if (ggbApplet.getVisible(`f'`)) ggbApplet.setVisible(`f'`, false);
    ggbApplet2.evalCommand(`h(x) = ${derivative}`);
    ggbApplet2.setColor('h', 255, 0, 0);
    ggbApplet2.setLineThickness('h', 7);
    ggbApplet2.setCaption('h', `$f'(x)=${derivative}$`);
    ggbApplet2.setLabelStyle('h', 3);
    ggbApplet2.setLabelVisible('h', true);
    return ggbApplet2.getValueString('h');
}

export function getDerivative() {
    ggbApplet.evalCommand(`f'(x)`);
    ggbApplet.setVisible(`f'`, false);
    // if (ggbApplet.getVisible(`f'`)) ggbApplet.setVisible(`f'`, false);
    return ggbApplet.getValueString(`f'`);
}

export function deleteObject(obj) {
    ggbApplet.deleteObject(obj);
}

function getRoundedValue(obj, places) {
    let mult = 10**places;
    return Math.round(mult * ggbApplet.getValue(obj)) / mult;
}

