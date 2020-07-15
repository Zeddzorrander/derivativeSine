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
    ggbApplet.evalCommand(`a = ${xVal}`);
}

export function parseEntry(value) {
    ggbApplet.evalCommand(`temp = ${value}`);
    const xVal = getRoundedValue('temp', 2);
    ggbApplet2.deleteObject('temp');
    return xVal;
}
export function deleteSlope(index, xVal) {
    index += 1;
    ggbApplet2.deleteObject(`C_${index}`);
    ggbApplet.setValue('a', xVal);
}

function getRoundedValue(obj, places) {
    let mult = 10**places;
    return Math.round(mult * ggbApplet.getValue(obj)) / mult;
}

